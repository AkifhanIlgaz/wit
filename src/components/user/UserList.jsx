import { IonContent, IonInfiniteScroll, IonList, IonModal, IonSearchbar } from '@ionic/react'
import { useState } from 'react'
import profilePhoto1 from '../../images/defaultPostPhoto.jpg'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'
import profilePhoto2 from '../../images/defaultSavedPhoto.jpg'
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
		<IonModal isOpen={isOpen} initialBreakpoint={0.75} breakpoints={[0, 0.25, 0.5, 0.75]} onDidDismiss={() => setIsOpen(false)}>
			<IonContent>
				<IonSearchbar></IonSearchbar>
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
