import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonItem, IonList, IonPopover, IonRow, IonToolbar } from '@ionic/react'
import { chevronBackOutline, ellipsisVertical, logOutOutline, pencilOutline, settingsOutline } from 'ionicons/icons'
import { useState } from 'react'
import { useHistory } from 'react-router'
import PostTabs from '../components/post/PostTabs'
import Posts from '../components/post/Posts'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import Authorized from '../layouts/Authorized'

const MyProfile = ({ userInfo }) => {
	const [selectedTab, setSelectedTab] = useState('posts')
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
			<IonGrid className="ion-no-padding">
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
						<IonButton id="popover">
							<IonIcon icon={ellipsisVertical}></IonIcon>
						</IonButton>
						<IonPopover trigger="popover" side="bottom" alignment="center">
							<IonList lines="none">
								<IonItem>
									Edit Profile
									<IonIcon size="small" icon={pencilOutline} slot="end"></IonIcon>
								</IonItem>
								<IonItem>
									Settings
									<IonIcon size="small" icon={settingsOutline} slot="end"></IonIcon>
								</IonItem>
								<IonItem>
									Logout
									<IonIcon color={'danger'} size="small" icon={logOutOutline} slot="end"></IonIcon>
								</IonItem>
							</IonList>
						</IonPopover>
					</IonButtons>
				</IonToolbar>

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
					>
						<span>{userInfo.username}</span>
					</IonCol>
				</IonRow>

				<ProfileAnalytics analytics={analytics} />
			</IonGrid>
			<PostTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<Posts posts={selectedTab === 'saved' ? userInfo.saved : userInfo.posts} />
		</Authorized>
	)
}

export default MyProfile
