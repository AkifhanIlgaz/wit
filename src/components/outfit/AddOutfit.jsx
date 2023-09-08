import { IonCard, IonCardContent, IonModal, IonPopover } from '@ionic/react'
import AddLinks from './AddLinks'

const AddOutfit = ({ isOpen, setIsOpen, photo }) => {
	return (
		<IonModal isOpen={isOpen}>
			<IonPopover isOpen dismissOnSelect>
				<IonCard>
					<IonCardContent>Click on the outfit to add additional info</IonCardContent>
				</IonCard>
			</IonPopover>

			<AddLinks photo={photo} setIsOpen={setIsOpen} />
		</IonModal>
	)
}

export default AddOutfit
