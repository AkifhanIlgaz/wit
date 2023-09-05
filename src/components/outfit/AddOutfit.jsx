import { IonButton, IonButtons, IonCard, IonCardContent, IonModal, IonPopover, IonToolbar } from '@ionic/react'
import { useState } from 'react'
import AddLinks from './AddLinks'

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

			<AddLinks photo={photo} />
		</IonModal>
	)
}

export default AddOutfit
