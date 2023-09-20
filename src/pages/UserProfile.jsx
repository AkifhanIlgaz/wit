import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import LogoTitle from '../components/LogoTitle'
import FollowButton from '../components/buttons/FollowButton'
import Outfits from '../components/outfit/Outfits'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const UserProfile = ({ userInfo, uid }) => {
	const history = useHistory()

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
						<img src={userInfo.photoUrl || defaultProfilePhoto} alt="User Profile Photo" className="profile-photo" />
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
						<h3>{userInfo.displayName}</h3>
					</IonCol>
				</IonRow>

				<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<FollowButton isFollowed={userInfo.isFollowed} uid={userInfo.uid} />
					</IonCol>
				</IonRow>

				<ProfileAnalytics
					analytics={{
						outfitCount: userInfo.outfits ? userInfo.outfits.length : 0,
						followers: userInfo.followers || [],
						followings: userInfo.followings || []
					}}
				/>
			</IonGrid>

			<Outfits uid={uid} />
		</Authorized>
	)
}

export default UserProfile
