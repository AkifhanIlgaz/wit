import { IonContent, IonList, IonModal } from '@ionic/react'
import ModalHeader from '../helper/ModalHeader'
import UserListItem from './UserListItem'

const UserList = ({ isOpen, setIsOpen, users }) => {
	return (
		<IonModal isOpen={isOpen}>
			<ModalHeader setIsOpen={setIsOpen} />
			<IonContent>
				<IonList className="ion-align-items" lines="full">
					{users.map((userInfo, i) => {
						return <UserListItem user={userInfo} key={i} />
					})}
				</IonList>
			</IonContent>
		</IonModal>
	)
}

export default UserList
