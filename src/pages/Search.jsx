import { IonContent, IonHeader, IonList, IonPage, IonSearchbar, IonToolbar } from '@ionic/react'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Firebase from '../api/firebase/firebase'
import { baseUrl, filterUsers } from '../api/wit-api/endPoints'
import LogoTitle from '../components/LogoTitle'
import UserListItem from '../components/user/UserListItem'

/**
 *
 * @param {string} displayName
 * @param {string} searchString
 * @returns {boolean}
 */
const checkDisplayName = (displayName, searchString) => {
	searchString = searchString.split(' ')
	for (const substr of searchString) {
		if (displayName.includes(substr)) return true
	}
	return false
}

const Search = () => {
	const firebase = new Firebase()
	const [currentUser, loading] = useAuthState(firebase.auth)

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

	const filter = async filterString => {
		const idToken = await currentUser.getIdToken(true)

		const res = await fetch(
			`${baseUrl}${filterUsers}?` +
				new URLSearchParams({
					filterString: filterString
				}),
			{
				method: 'GET',
				headers: {
					Authorization: idToken
				}
			}
		)

		const users = await res.json()
		setItems(users)
	}

	useEffect(() => {
		if (loading) return
		setItems(users)
	}, [loading])

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

							filter(e.detail.value)
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
