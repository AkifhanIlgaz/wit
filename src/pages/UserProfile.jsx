import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Firebase from '../api/firebase/firebase'
import { api_user, baseUrl } from '../api/wit-api/endPoints'
import LogoTitle from '../components/LogoTitle'
import FollowButton from '../components/buttons/FollowButton'
import Outfits from '../components/outfit/Outfits'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const UserProfile = ({ uid }) => {
	const history = useHistory()
	const firebase = new Firebase()
	const [user, setUser] = useState({})

	const getUser = async () => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			const res = await fetch(
				`${baseUrl}${api_user}?` +
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
			const u = await res.json()
			console.log(u)
			setUser(u)
		})
	}

	useEffect(() => {
		getUser()
	}, [])

	return (
		<Authorized>
			<IonToolbar
				color={'transparent'}
				style={{
					marginTop: '2%'
				}}
			>
				<LogoTitle />
				<IonButtons slot="start">
					<IonButton onClick={() => history.goBack()}>
						<IonIcon icon={chevronBackOutline}></IonIcon>
					</IonButton>
				</IonButtons>
			</IonToolbar>

			<IonGrid className="ion-no-padding">
				<IonRow
					className="ion-align-items-center ion-justify-content-center"
					style={{
						marginTop: '1%'
					}}
				>
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
						size="4"
					>
						<img src={user.photoUrl || defaultProfilePhoto} alt="User Profile Photo" className="profile-photo" />
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
						size="4"
						className="count"
					>
						<h3>{user.displayName}</h3>
					</IonCol>
				</IonRow>

				<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<FollowButton isFollowed={user.isFollowed} uid={uid} />
					</IonCol>
				</IonRow>

				<ProfileAnalytics uid={uid} />
			</IonGrid>

			<Outfits uid={uid} />
		</Authorized>
	)
}

export default UserProfile
