import { IonCol, IonRow } from '@ionic/react'
import { useEffect, useState } from 'react'
import profilePhoto1 from '../../images/defaultPostPhoto.jpg'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'
import profilePhoto2 from '../../images/defaultSavedPhoto.jpg'
import FollowersBox from './box/FollowersBox'
import FollowingsBox from './box/FollowingsBox'
import PostBox from './box/PostBox'

const ProfileAnalytics = ({ postCount }) => {
	const [followers, setFollowers] = useState([])
	const [followings, setFollowings] = useState([])

	const getFollowers = async () => {
		// TODO: Get followers
		setFollowers([
			{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
			{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
			{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true },
			{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
			{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
			{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true },
			{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
			{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
			{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true }
		])
	}

	const getFollowings = async () => {
		// TODO: Get followings
		setFollowings([
			{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
			{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
			{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true }
		])
	}

	useEffect(() => {
		const fetchData = async () => {
			await getFollowers()
			await getFollowings()
		}

		fetchData()
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
				<PostBox count={4} />
				<FollowersBox users={followers} />
				<FollowingsBox users={followings} />
			</IonCol>
		</IonRow>
	)
}
export default ProfileAnalytics
