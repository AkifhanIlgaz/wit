import { IonCol, IonRow } from '@ionic/react'
import { useEffect, useState } from 'react'
import Firebase from '../../api/firebase/firebase'
import { baseUrl, follower, following, outfitCount } from '../../api/wit-api/endPoints'
import FollowersBox from './box/FollowersBox'
import FollowingsBox from './box/FollowingsBox'
import PostBox from './box/PostBox'

const ProfileAnalytics = ({ uid }) => {
	const [followers, setFollowers] = useState([])
	const [followings, setFollowings] = useState([])
	const [count, setCount] = useState(0)

	const firebase = new Firebase()
	const getFollowers = async (last = '') => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			const res = await fetch(
				`${baseUrl}${follower}?` +
					new URLSearchParams({
						uid: uid,
						last: last
					}),
				{
					method: 'GET',
					headers: {
						Authorization: idToken
					}
				}
			)

			const newFollowers = await res.json()
			setFollowers([...followers, ...newFollowers])
		})
	}

	const getFollowings = async (last = '') => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			const res = await fetch(
				`${baseUrl}${following}?` +
					new URLSearchParams({
						uid: uid,
						last: last
					}),
				{
					method: 'GET',
					headers: {
						Authorization: idToken
					}
				}
			)

			const newFollowings = await res.json()
			setFollowings([...followings, ...newFollowings])
		})
	}

	const getOutfitCount = async () => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			const res = await fetch(
				`${baseUrl}${outfitCount}?` +
					new URLSearchParams({
						uid: uid
					}),
				{
					method: 'GET',
					headers: {
						Authorization: idToken
					}
				}
			)

			const body = await res.json()

			setCount(body.outfitCount)
		})
	}

	useEffect(() => {
		getFollowers()
		getFollowings()
		getOutfitCount()
	}, [])

	return (
		<IonRow className="ion-align-items-center ion-justify-content-space-around ion-margin-top  " style={{ borderTop: '1px solid rgb(219,219,219)', borderBottom: '1px solid rgb(219,219,219)' }}>
			<IonCol
				className="ion-no-padding"
				style={{
					display: 'flex',
					justifyContent: 'space-around'
				}}
			>
				<PostBox count={count} />
				<FollowersBox users={followers} getFollowers={getFollowers} />
				<FollowingsBox users={followings} getFollowings={getFollowings} />
			</IonCol>
		</IonRow>
	)
}
export default ProfileAnalytics
