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

	ImageBitmap

	const click = () => {
		upload.current.click()
	}

	const logIdToken = async () => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			console.log(idToken)
		})
	}

	const areas = document.querySelectorAll('area')
	areas.forEach(area => {
		area.addEventListener('mouseover', e => {
			e.preventDefault()
			// Create the popup element
			let popup = document.createElement('div')
			popup.classList.add('popup')
			popup.innerText = area.dataset.popupContent
			console.log(area.dataset.popupContent)
			// Position the popup based on mouse coordinates
			popup.style.left = e.pageX + 'px'
			popup.style.top = e.pageY + 'px'

			// Add to body and remove on mouseout
			document.body.appendChild(popup)
			area.addEventListener('mouseout', () => {
				popup.remove()
			})
		})
	})

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
					width: '100%',
					height: '100%'
				}}
				useMap="#photo"
			/>

			<map name="photo">
				<area shape="circle" coords="195,422,10" target="_blank" title="Region 1" data-popup-content="Content for Region 1" />
			</map>
		</IonPage>
	)
}

export default Home
