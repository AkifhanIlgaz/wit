import { IonButton, IonPage } from '@ionic/react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import Firebase from '../api/firebase/firebase'
import userState from '../atoms/user'

const Home = () => {
	const user = useRecoilValue(userState)
	const [downloadURL, setDownloadURL] = useState(null)
	const upload = useRef()
	const { register, handleSubmit } = useForm()

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

	return (
		<IonPage>
			<div onClick={() => click()}>
				<div>
					<IonButton>Upload Photo</IonButton>
					<input type="file" style={{ display: 'none' }} onChange={handleFileUpload} ref={upload} />
				</div>
			</div>

			<IonButton onClick={logIdToken}>Id Token</IonButton>
		</IonPage>
	)
}

export default Home
