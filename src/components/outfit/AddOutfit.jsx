import { IonCard, IonCardContent, IonModal, IonPopover } from '@ionic/react'
import AddLinks from './AddLinks'

const AddOutfit = ({ isOpen, setIsOpen, photo }) => {
	return (
		<IonModal isOpen={isOpen}>
			<IonPopover isOpen dismissOnSelect>
				<IonCard>
					<IonCardContent>Click to add links</IonCardContent>
				</IonCard>
			</IonPopover>

			<AddLinks photo={photo} setIsOpen={setIsOpen} />
		</IonModal>
	)
}

export default AddOutfit
