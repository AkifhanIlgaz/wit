import { IonAlert, IonButton, IonButtons, IonToolbar, useIonAlert } from '@ionic/react'
import isUrlHttp from 'is-url-http'
import { Fragment, useState } from 'react'
import Firebase from '../../api/firebase/firebase'
import { baseUrl, generateUploadUrl } from '../../api/wit-api/endPoints'
import OutfitLinkDot from './OutfitLinkDot'

const invalidUrl = 'Please enter an valid URL'
const invalidTitle = 'Please enter title'

const AddLinks = ({ photo, setIsOpen }) => {
	const firebase = new Firebase()
	const [isErrorOpen, setIsErrorOpen] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [links, setLinks] = useState([])
	const [presentAlert] = useIonAlert()

	const uploadPhoto = async () => {
		firebase.auth.onAuthStateChanged(async user => {
			try {
				// Generate upload url
				const idToken = await user.getIdToken(true)
				const res = await fetch(`${baseUrl}${generateUploadUrl}`, {
					headers: {
						idToken: idToken,
						fileExtension: photo.format
					}
				})
				const uploadUrl = await res.text()

				// Convert base64 image to File
				const blob = await fetch(photo.dataUrl).then(res => res.blob())
				const file = new File([blob], '', { type: `image/${photo.format}` })

				await fetch(uploadUrl, {
					method: 'PUT',
					body: file,
					headers: {
						'Content-Type': file.type
					}
				})
			} catch (error) {
				console.log(error)
			}
		})
	}

	return (
		<Fragment>
			<IonToolbar color={'transparent'}>
				<IonButtons slot="start">
					<IonButton onClick={() => setIsOpen(false)}>Cancel</IonButton>
				</IonButtons>
				<IonButtons slot="end">
					<IonButton
						onClick={() => {
							// TODO: Upload photo to Storage
							uploadPhoto()

							// TODO: Insert to Firestore

							setIsOpen(false)
						}}
					>
						Save
					</IonButton>
				</IonButtons>
			</IonToolbar>
			<div
				style={{
					position: 'relative'
				}}
			>
				<img
					src={photo.dataUrl}
					style={{
						width: '100vw',
						height: '100vh'
					}}
					onClick={e => {
						const rect = e.currentTarget.getBoundingClientRect()

						// Relative to clicked image
						const clicked = {
							x: e.clientX - rect.x,
							y: e.clientY - rect.y
						}

						const point = {
							left: (clicked.x / rect.width) * 100,
							top: (clicked.y / rect.height) * 100
						}

						presentAlert({
							header: 'Please enter your info',
							buttons: [
								{
									text: 'Cancel',
									role: 'destructive'
								},
								{
									text: 'Save',
									role: 'confirm',
									handler: data => {
										if (data.title === '') {
											setIsErrorOpen(true)
											setErrorMessage(invalidTitle)
											return
										}
										if (!isUrlHttp(data.link)) {
											setIsErrorOpen(true)
											setErrorMessage(invalidUrl)
											return
										}

										setLinks([
											...links,
											{
												left: `${point.left - 2}%`,
												top: `${point.top - 1}%`,
												title: data.title,
												url: data.link
											}
										])
									}
								}
							],
							inputs: [
								{
									name: 'title',
									type: 'text',
									placeholder: 'Title'
								},
								{
									name: 'link',
									type: 'url',
									placeholder: 'Link'
								}
							]
						})
					}}
				/>

				{links.map((link, index) => (
					<OutfitLinkDot key={index} link={link} />
				))}

				<IonAlert isOpen={isErrorOpen} message={errorMessage} buttons={['OK']} onDidDismiss={() => setIsErrorOpen(false)}></IonAlert>
			</div>
		</Fragment>
	)
}

export default AddLinks
