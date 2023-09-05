import { IonButton, IonButtons, IonCard, IonCardContent, IonModal, IonPopover, IonToolbar } from '@ionic/react'
import { useState } from 'react'

const AddOutfit = ({ isOpen, setIsOpen, photo }) => {
	const [point, setPoint] = useState({})

	return (
		<IonModal isOpen={isOpen}>
			<IonPopover isOpen dismissOnSelect>
				<IonCard>
					<IonCardContent>Click on the outfit to add additional info</IonCardContent>
				</IonCard>
			</IonPopover>

			<IonToolbar color={'transparent'}>
				<IonButtons slot="start">
					<IonButton onClick={() => setIsOpen(false)}>Cancel</IonButton>
				</IonButtons>
				<IonButtons slot="end">
					<IonButton onClick={() => setIsOpen(false)}>Save</IonButton>
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

						console.log(clicked)

						const button = {
							left: (clicked.x / rect.width) * 100,
							top: (clicked.y / rect.height) * 100
						}

						setPoint(button)
					}}
				/>

				<span
					style={{
						position: 'absolute',
						left: `${point.left}%`,
						top: `${point.top}%`
					}}
				>
					Clicked
				</span>
			</div>
		</IonModal>
	)
}

export default AddOutfit
