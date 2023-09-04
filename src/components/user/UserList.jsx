import { IonContent, IonInfiniteScroll, IonList, IonModal } from '@ionic/react'
import { useState } from 'react'
import ModalHeader from '../helper/ModalHeader'
import UserListItem from './UserListItem'

const UserList = ({ isOpen, setIsOpen, users }) => {
	const [myUsers, setUsers] = useState(users)

	const addUsers = () => {
		const mock = [
			{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
			{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
			{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true }
		]

		setTimeout(() => {
			setUsers([...myUsers, ...mock])
		}, 1000)
	}

	return (
		<IonModal isOpen={isOpen}>
			<ModalHeader setIsOpen={setIsOpen} />
			<IonContent>
				<IonList className="ion-align-items" lines="full">
					{users.map((userInfo, i) => {
						return <UserListItem user={userInfo} key={i} />
					})}
				</IonList>

				<IonInfiniteScroll
					onIonInfinite={ev => {
						addUsers()
						setTimeout(() => {
							ev.target.complete()
						}, 1000)
					}}
				></IonInfiniteScroll>
			</IonContent>
		</IonModal>
	)
}

export default UserList
