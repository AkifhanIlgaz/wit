import { IonContent, IonInfiniteScroll, IonList, IonModal, IonSearchbar } from '@ionic/react'
import UserListItem from './UserListItem'

const UserList = ({ isOpen, setIsOpen, users, getUsers }) => {
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
						getUsers(users.at(-1).displayName).then(() => ev.target.complete())
					}}
				></IonInfiniteScroll>
			</IonContent>
		</IonModal>
	)
}

export default UserList
