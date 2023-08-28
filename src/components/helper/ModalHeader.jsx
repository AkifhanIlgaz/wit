import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'

const ModalHeader = ({ setIsOpen }) => {
	return (
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonButton onClick={() => setIsOpen(false)}>
						<IonIcon icon={chevronBackOutline}></IonIcon>
					</IonButton>
				</IonButtons>
				<IonTitle>Wear It Tomorrow</IonTitle>
			</IonToolbar>
		</IonHeader>
	)
}

export default ModalHeader
