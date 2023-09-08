import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import firebaseConfig from './firebaseConfig'

export const UsersCollection = 'users'
export const OutfitsCollection = 'outfits'

export function addIdToken(url, token) {
	return `${url}?token=${encodeURIComponent(token)}`
}

firebase.initializeApp(firebaseConfig)

class Firebase {
	constructor() {
		this.auth = firebase.auth()
		this.firestore = firebase.firestore()
		this.storage = firebase.storage()
		this.googleProvider = new firebase.auth.GoogleAuthProvider()
		this.twitterProvider = new firebase.auth.TwitterAuthProvider()
		this.facebookProvider = new firebase.auth.FacebookAuthProvider()
		this.githubProvider = new firebase.auth.GithubAuthProvider()
	}

	async sendVerificationCode(phoneNumber) {
		try {
			const phoneAuthProvider = new firebase.auth.PhoneAuthProvider()
			const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
			const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneNumber, appVerifier)
			return verificationId
		} catch (error) {
			throw error
		}
	}

	async signUpWithPhone(verificationId, verificationCode, userData) {
		try {
			const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode)
			const user = (await this.auth.signInWithCredential(credential)).user
			userData = await this.insertUser({ ...userData, ...user }, user.providerId)
			return userData
		} catch (error) {
			throw error
		}
	}

	async signInWithPhone(verificationId, verificationCode) {
		try {
			const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode)
			const user = (await this.auth.signInWithCredential(credential)).user
			return await this.insertUser(user, user.providerId)
		} catch (error) {
			throw error
		}
	}

	async signInWithThirdPartyProvider(provider) {
		try {
			const res = await this.auth.signInWithPopup(provider)
			return await this.insertUser(res.user, res.additionalUserInfo.providerId)
		} catch (error) {
			throw error
		}
	}

	async insertUser(userData, providerId = 'firebase') {
		try {
			userData = userData.multiFactor.user
			const userDoc = await this.firestore.collection(UsersCollection).doc(userData.uid).get()
			userData = { uid: userData.uid, createdAt: userData.metadata.createdAt, creationTime: userData.metadata.creationTime, lastLoginAt: userData.metadata.lastLoginAt, lastSignInTime: userData.metadata.lastSignInTime, displayName: userData.displayName, email: userData.email, providerId: providerId }
			if (userDoc.exists) {
				await this.setDocument(UsersCollection, userData.uid, { ...userDoc.data(), ...userData })
				return { ...userDoc.data(), ...userData }
			} else {
				await this.setDocument(UsersCollection, userData.uid, userData)
				return userData
			}
		} catch (error) {
			throw error
		}
	}

	async checkUserExistsByEMail(email) {
		try {
			const userCredential = await this.auth.fetchSignInMethodsForEmail(email)
			return userCredential.length > 0
		} catch (error) {
			throw error
		}
	}

	async signUpWithEmail(email, password, userData) {
		try {
			const userExists = await this.checkUserExistsByEMail(email)
			if (userExists) {
				return false
			} else {
				const userCredential = await this.auth.createUserWithEmailAndPassword(email, password)
				userData = await this.insertUser({ ...userData, ...userCredential.user }, userCredential.user.providerId)
				return userData
			}
		} catch (error) {
			console.log(error)
			throw error
		}
	}

	async signInWithEmail(email, password) {
		try {
			const userExists = await this.checkUserExistsByEMail(email)
			if (userExists) {
				const userCredential = await this.auth.signInWithEmailAndPassword(email, password)
				const userData = await this.insertUser(userCredential.user)
				return userData
			} else {
				return false
			}
		} catch (error) {
			throw error
		}
	}

	async resetPasswordWithEmail(email) {
		try {
			const userExists = await this.checkUserExistsByEMail(email)
			if (userExists) {
				await this.auth.sendPasswordResetEmail(email)
			} else {
				return false
			}
		} catch (error) {
			throw error
		}
	}

	async signOut() {
		try {
			await this.auth.signOut()
		} catch (error) {
			throw error
		}
	}

	async addDocument(collection, data) {
		try {
			const docRef = await this.firestore.collection(collection).add(data)
			return { id: docRef.id, ref: docRef }
		} catch (error) {
			throw error
		}
	}

	async getDocuments(collection) {
		try {
			const snapshot = await this.firestore.collection(collection).get()
			return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
		} catch (error) {
			throw error
		}
	}

	async getDocument(collection, documentId) {
		try {
			const docRef = this.firestore.collection(collection).doc(documentId)
			const doc = await docRef.get()
			if (doc.exists) {
				return { id: doc.id, ...doc.data() }
			} else {
				return false
			}
		} catch (error) {
			throw error
		}
	}

	async updateDocument(collection, docId, data) {
		try {
			await this.firestore.collection(collection).doc(docId).update(data)
		} catch (error) {
			throw error
		}
	}

	async setDocument(collection, docId, data) {
		try {
			await this.firestore.collection(collection).doc(docId).set(data)
		} catch (error) {
			throw error
		}
	}

	async deleteDocument(collection, docId) {
		try {
			await this.firestore.collection(collection).doc(docId).delete()
		} catch (error) {
			throw error
		}
	}

	async uploadFile(storagePath, file) {
		try {
			let storageRef = this.storage.ref(storagePath)
			storageRef = storageRef.child(file.name)
			const snapshot = await storageRef.put(file)
			const downloadURL = await snapshot.ref.getDownloadURL()
			return downloadURL
		} catch (error) {
			throw error
		}
	}

	/**
	 *
	 * @param {*} storagePath
	 * @param {string} base64
	 * @param {*} fileName
	 * @returns
	 */
	async uploadBase64File(storagePath, base64, fileName) {
		try {
			// base64 = base64.slice(base64.search('base64') + 7)
			let storageRef = this.storage.ref(storagePath)
			storageRef = storageRef.child(fileName)
			const snapshot = await storageRef.putString(base64, 'data_url')
			const downloadURL = await snapshot.ref.getDownloadURL()
			return downloadURL
		} catch (error) {
			throw error
		}
	}

	async deleteFile(storagePath) {
		try {
			const storageRef = this.storage.ref(storagePath)
			await storageRef.delete()
		} catch (error) {
			throw error
		}
	}
}

export default Firebase
