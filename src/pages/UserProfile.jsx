import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react'
import { chevronBackOutline, ellipsisVertical } from 'ionicons/icons'
import { useHistory } from 'react-router'
import DefaultButton from '../components/buttons/DefaultButton'
import FollowButton from '../components/buttons/FollowButton'
import Posts from '../components/post/Posts'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const UserProfile = ({ userInfo }) => {
	const history = useHistory()

	const header = {
		photoUrl: userInfo.profilePhoto,
		username: userInfo.username,
		isFollowed: userInfo.isFollowed,
		isSendMessageDisabled: userInfo.isSendMessageDisabled
	}

	const analytics = {
		followers: {
			title: 'Followers',
			count: userInfo.followerCount
		},
		followings: {
			title: 'Following',
			count: userInfo.followingCount
		},
		posts: {
			title: 'Posts',
			count: userInfo.posts.length
		}
	}

	return (
		<Authorized>
			<IonToolbar
				color={'transparent'}
				style={{
					marginTop: '2%'
				}}
			>
				<IonButtons slot="start">
					<IonButton onClick={() => history.goBack()}>
						<IonIcon icon={chevronBackOutline}></IonIcon>
					</IonButton>
				</IonButtons>
				<IonButtons slot="end">
					<IonButton>
						<IonIcon icon={ellipsisVertical}></IonIcon>
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
						<img src={header.photoUrl || defaultProfilePhoto} alt="User Profile Photo" className="profile-photo" />
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
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
						className="title"
						size="4"
					>
						<span>{userInfo.username}</span>
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<FollowButton isFollowed={header.isFollowed} />
						{!header.isSendMessageDisabled && <DefaultButton text={'Message'} />}
					</IonCol>
				</IonRow>

				<ProfileAnalytics analytics={analytics} />
			</IonGrid>
			<Posts posts={userInfo.posts} />
		</Authorized>
	)
}

export default UserProfile
