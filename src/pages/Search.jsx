import { IonContent, IonHeader, IonList, IonPage, IonSearchbar, IonToolbar } from '@ionic/react'
import { useEffect, useState } from 'react'
import LogoTitle from '../components/LogoTitle'
import UserListItem from '../components/user/UserListItem'

const Search = () => {
	const users = [
		{
			uid: 1,
			photoUrl: 'http://dummyimage.com/222x100.png/ff4444/ffffff',
			isFollowed: true,
			displayName: 'Gill Antoniewski'
		},
		{
			uid: 2,
			photoUrl: 'http://dummyimage.com/189x100.png/cc0000/ffffff',
			isFollowed: false,
			displayName: 'Joseito Musselwhite'
		},
		{
			uid: 3,
			photoUrl: 'http://dummyimage.com/193x100.png/cc0000/ffffff',
			isFollowed: true,
			displayName: 'Humfried Minshull'
		},
		{
			uid: 4,
			photoUrl: 'http://dummyimage.com/226x100.png/cc0000/ffffff',
			isFollowed: false,
			displayName: 'Bendicty Ollis'
		},
		{
			uid: 5,
			photoUrl: 'http://dummyimage.com/157x100.png/dddddd/000000',
			isFollowed: true,
			displayName: 'Colleen Glasheen'
		}
	]
	const [items, setItems] = useState(() => users)

	useEffect(() => {
		setItems(users)
	}, [])

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<LogoTitle />
				</IonToolbar>
				<IonToolbar>
					<IonSearchbar
						animated
						placeholder="Search"
						showClearButton="focus"
						onIonChange={e => {
							if (!e.detail.value) {
								setItems([])
								return
							}

							console.log(e.detail.value)

							console.log(
								items.filter(user => {
									console.log(user)
									user.displayName.startsWith(e.detail.value)
								})
							)
							setItems(items.filter(user => user.displayName.startsWith(e.detail.value)))
						}}
						onIonBlur={() => setItems(users)}
					></IonSearchbar>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonList
					lines="full"
					style={{
						marginTop: '.2em'
					}}
				>
					{items.map((user, i) => (
						<UserListItem key={i} user={user} />
					))}
				</IonList>
			</IonContent>
		</IonPage>
	)
}

export default Search
