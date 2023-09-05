import { IonAlert, IonButton, IonButtons, IonCard, IonCardContent, IonModal, IonPopover, IonToolbar } from '@ionic/react'
import isUrlHttp from 'is-url-http'
import { useState } from 'react'
import OutfitLinkDot from './OutfitLinkDot'

const AddOutfit = ({ isOpen, setIsOpen, photo }) => {
	const [dot, setDot] = useState({})
	const [isAlertOpen, setIsAlertOpen] = useState(false)

	//    Left, right, title, url
	const [links, setLinks] = useState([])

	const close = () => {
		setDot({})
		setLinks([])
		setIsOpen(false)
	}

	return (
		<IonModal isOpen={isOpen}>
			<IonPopover isOpen dismissOnSelect>
				<IonCard>
					<IonCardContent>Click on the outfit to add additional info</IonCardContent>
				</IonCard>
			</IonPopover>

			<IonToolbar color={'transparent'}>
				<IonButtons slot="start">
					<IonButton onClick={close}>Cancel</IonButton>
				</IonButtons>
				<IonButtons slot="end">
					<IonButton onClick={close}>Save</IonButton>
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

						setIsAlertOpen(true)
						setDot(point)
					}}
				/>

				<IonAlert
					isOpen={isAlertOpen}
					header="Please enter your info"
					buttons={[
						{
							text: 'Cancel',
							role: 'destructive',
							handler: () => {
								setDot({})
								setLinks([])
							}
						},
						{
							text: 'Save',
							role: 'confirm',
							handler: data => {
								// TODO: If it's not valid url alert
								if (isUrlHttp(data['0'])) {
									setLinks([
										...links,
										{
											left: `${dot.left - 2}%`,
											top: `${dot.top - 1}%`,
											url: data['0']
										}
									])
								}

								// TODO: Reset point ?
							}
						}
					]}
					inputs={[
						{
							type: 'url',
							placeholder: 'Link'
						}
					]}
					onDidDismiss={e => {
						setIsAlertOpen(false)
					}}
				></IonAlert>

				{links.map(link => (
					<OutfitLinkDot link={link} />
				))}
			</div>
		</IonModal>
	)
}

export default AddOutfit
