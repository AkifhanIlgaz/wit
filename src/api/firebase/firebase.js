import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { addUser, baseUrl } from '../wit-api/endPoints'
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

	async signInWithThirdPartyProvider(provider) {
		try {
			const userCredential = await this.auth.signInWithPopup(provider)
			const user = {
				displayName: userCredential.user.displayName,
				uid: userCredential.user.uid,
				photoUrl: userCredential.user.photoURL,
				isProfileSet: userCredential.user.photoURL === null || userCredential.user.displayName === null ? false : true
			}
 
			if (userCredential.additionalUserInfo.isNewUser) {
				await fetch(`${baseUrl}${addUser}`, {
					method: 'POST',
					headers: {
						Authorization: await userCredential.user.getIdToken(true),
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(user)
				})
			}

			return user
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
}

export default Firebase
