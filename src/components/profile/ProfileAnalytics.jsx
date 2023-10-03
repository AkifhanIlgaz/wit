import { IonCol, IonRow } from '@ionic/react'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
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
	const [user, loading, err] = useAuthState(firebase.auth)

	const getFollowers = async (last = '') => {
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

		return await res.json()
	}

	const getFollowings = async (last = '') => {
		const idToken = user.getIdToken(true)

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

		return await res.json()
	}

	const getOutfitCount = async () => {
		const idToken = user.getIdToken(true)
		console.log(idToken)
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

		return body.outfitCount
	}

	useEffect(() => {
		if (loading) return
		Promise.all([getFollowers(), getFollowings(), getOutfitCount()]).then(values => {
			setFollowers([...followers, ...values[0]])
			setFollowings([...followings, ...values[1]])
			setCount(values[2])
		})
	}, [loading])

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
