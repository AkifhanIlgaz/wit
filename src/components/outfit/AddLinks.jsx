import { IonAlert, IonButton, IonButtons, IonToolbar, useIonAlert } from '@ionic/react'
import isUrlHttp from 'is-url-http'
import { Fragment, useState } from 'react'
import OutfitLinkDot from './OutfitLinkDot'

const AddLinks = ({ photo, setIsOpen }) => {
	const [currentPoint, setCurrentPoint] = useState({})
	const [isErrorOpen, setIsErrorOpen] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const invalidUrl = 'Please enter an valid URL'
	const invalidTitle = 'Please enter title'
	const [links, setLinks] = useState([])

	const reset = () => {
		setCurrentPoint({})
		setLinks([])
		setIsOpen(false)
	}

	const [presentAlert] = useIonAlert()

	return (
		<Fragment>
			<IonToolbar color={'transparent'}>
				<IonButtons slot="start">
					<IonButton onClick={reset}>Cancel</IonButton>
				</IonButtons>
				<IonButtons slot="end">
					<IonButton onClick={reset}>Save</IonButton>
				</IonButtons>
			</IonToolbar>
			<div
				style={{
					position: 'relative'
				}}
			>
				<img
					src={photo}
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

						setCurrentPoint(point)

						presentAlert({
							header: 'Please enter your info',
							buttons: [
								{
									text: 'Cancel',
									role: 'destructive',
									handler: () => {
										setCurrentPoint({})
									}
								},
								{
									text: 'Save',
									role: 'confirm',
									handler: data => {
										console.log(data)
										if (data.title === '') {
											setIsErrorOpen(true)
											setErrorMessage(invalidTitle)

											setIsAlertOpen(false)
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
												left: `${currentPoint.left - 2}%`,
												top: `${currentPoint.top - 1}%`,
												title: data.title,
												url: data.link
											}
										])
									}
								}
							],
							inputs: [
								{
									name: 'text',
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
