import { IonButton, IonPage } from '@ionic/react'
import axios from 'axios'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import Firebase from '../api/firebase/firebase'
import Link from '../api/models/link'
import Outfit from '../api/models/outfit'
import userState from '../atoms/user'

const ImageMap = () => {
	const user = useRecoilValue(userState)
	const [downloadURL, setDownloadURL] = useState('')
	const upload = useRef()
	const { register, handleSubmit } = useForm()
	const links = []
	const url = 'http://7763-212-154-67-214.ngrok-free.app/add'
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

	logIdToken()

	const addOutfit = async () => {
		const outfit = new Outfit('', downloadURL, links)
		console.log(outfit)
		const res = await axios.post(url, outfit)
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
			
				onClick={e => {
					const rect = e.currentTarget.getBoundingClientRect()
					const x = (e.pageX / rect.width) * 100
					const y = (e.pageY / rect.height) * 100
					links.push(new Link('sdşfkşsdlf', links.length + 'Zoz', `${x}%`, `${y}%`))
				}}
			/>

			<IonButton onClick={addOutfit}>Add Outfit</IonButton>
		</IonPage>
	)
}

export default ImageMap
