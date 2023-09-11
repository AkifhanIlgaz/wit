import { IonAlert, IonButton, IonButtons, IonToolbar, useIonAlert } from '@ionic/react'
import isUrlHttp from 'is-url-http'
import { Fragment, useState } from 'react'
import Firebase from '../../api/firebase/firebase'
import Link from '../../api/models/link'
import { addOutfit, baseUrl, generateUploadUrl } from '../../api/wit-api/endPoints'
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
				// Convert base64 image to File
				const blob = await fetch(photo.dataUrl).then(res => res.blob())
				const file = new File([blob], '', { type: `image/${photo.format}` })

				// Generate upload url
				const idToken = await user.getIdToken(true)
				let uploadData = await fetch(`${baseUrl}${generateUploadUrl}`, {
					headers: {
						Authorization: idToken,
						fileExtension: photo.format
					}
				}).then(res => res.json())

				const res = await fetch(uploadData.uploadUrl, {
					method: 'PUT',
					body: file,
					headers: {
						'Content-Type': file.type
					}
				})

				if (res.ok) {
					await fetch(`${baseUrl}${addOutfit}`, {
						method: 'POST',
						headers: {
							Authorization: idToken,
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							photoUrl: uploadData.filePath,
							links: links
						})
					})
				}
			} catch (error) {
				// TODO: Open alert on error
				console.log(error)
			}
		})

		setIsOpen(false)
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
							uploadPhoto()
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

										setLinks([...links, new Link(data.title, data.link, `${point.left - 2}%`, `${point.top - 1}%`)])
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
