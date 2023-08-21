import { IonButton, IonPage } from '@ionic/react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import Firebase from '../api/firebase/firebase'
import userState from '../atoms/user'

const Home = () => {
	const user = useRecoilValue(userState)
	const [downloadURL, setDownloadURL] = useState('')
	const upload = useRef()
	const { register, handleSubmit } = useForm()
	const links = []

	const firebase = new Firebase()

	const handleFileUpload = async e => {
		const file = e.target.files[0]
		try {
			const downloadURL = await firebase.uploadFile(`${user.uid}/outfits`, file)
			setDownloadURL(downloadURL)
		} catch (error) {
			console.log(error)
		}
	}

	const click = () => {
		upload.current.click()
	}

	const logIdToken = async () => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			console.log(idToken)
		})
	}

	const addOutfit = async () => {
		const data = {
			uid: user.uid,
			photoURL: downloadURL,
			links: links
		}
		const res = await firebase.addDocument('outfits', data)
	}

	return downloadURL === '' ? (
		<IonPage>
			<div onClick={() => click()}>
				<div>
					<IonButton>Upload Photo</IonButton>
					<input type="file" style={{ display: 'none' }} onChange={handleFileUpload} ref={upload} />
				</div>
			</div>
		</IonPage>
	) : (
		<IonPage>
			<img
				src={downloadURL}
				style={{
					width: '100vw',
					height: '100vh'
				}}
				useMap="#photo"
				onClick={e => {
					const rect = e.currentTarget.getBoundingClientRect()
					const x = (e.pageX / rect.width) * 100
					const y = (e.pageY / rect.height) * 100
					links.push({
						left: `${x}%`,
						top: `${y}%`,
						link: links.length + 'Zoz',
						info: 'sdflksdfşl'
					})
				}}
			/>

			<IonButton onClick={addOutfit}>Add Outfit</IonButton>
		</IonPage>
	)
}

export default Home
