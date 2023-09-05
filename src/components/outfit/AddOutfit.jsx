import { IonAlert, IonButton, IonButtons, IonCard, IonCardContent, IonModal, IonPopover, IonToolbar } from '@ionic/react'
import { useState } from 'react'

const AddOutfit = ({ isOpen, setIsOpen, photo }) => {
	const [dot, setDot] = useState({})
	const [isAlertOpen, setIsAlertOpen] = useState(false)

	//    Left, right, title, url
	const [link, setLink] = useState({})

	const close = () => {
		setDot({})
		setLink({})
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
					alt=""
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
								setLink({})
							}
						},
						{
							text: 'Save',
							role: 'confirm',
							handler: data => {
								console.log(data)
								setLink({
									left: `${dot.left}%`,
									top: `${dot.top}%`,
									title: data['0'],
									url: data['1']
								})
								// TODO: Reset point ?
							}
						}
					]}
					inputs={[
						{
							type: 'text',
							placeholder: 'Title'
						},

						{
							type: 'url',
							placeholder: 'Link'
						}
					]}
					onDidDismiss={e => {
						setIsAlertOpen(false)
					}}
				></IonAlert>

				<IonCard
					style={{
						position: 'absolute',
						left: link.left,
						top: link.top
					}}
					className="ion-no-margin "
				>
					<IonCardContent
						className="ion-no-padding"
						style={{
							padding: '.5rem'
						}}
					>
						<a href={link.url}>{link.title}</a>
					</IonCardContent>
				</IonCard>
			</div>
		</IonModal>
	)
}

export default AddOutfit
