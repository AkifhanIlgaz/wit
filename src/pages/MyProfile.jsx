import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonItem, IonList, IonPopover, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { ellipsisVertical, logOutOutline, pencilOutline, settingsOutline } from 'ionicons/icons'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import Firebase from '../api/firebase/firebase'
import userState from '../atoms/user'
import PostTabs from '../components/post/PostTabs'
import Posts from '../components/post/Posts'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import Authorized from '../layouts/Authorized'

const MyProfile = ({ userInfo }) => {
	const [selectedTab, setSelectedTab] = useState('posts')
	const [user, setUser] = useRecoilState(userState)
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

	const signOut = async () => {
		const firebase = new Firebase()
		const res = await firebase.signOut()
		setUser(res)
		history.push('/home')
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
					<IonTitle>Wear It Tomorrow</IonTitle>
					<IonButtons slot="end">
						<IonButton id="popover">
							<IonIcon icon={ellipsisVertical}></IonIcon>
						</IonButton>
						<IonPopover trigger="popover" side="bottom" alignment="center" dismissOnSelect>
							<IonList lines="none">
								<IonItem onClick={() => history.push('/edit-profile')}>
									Edit Profile
									<IonIcon size="small" icon={pencilOutline} slot="end"></IonIcon>
								</IonItem>
								<IonItem>
									Settings
									<IonIcon size="small" icon={settingsOutline} slot="end"></IonIcon>
								</IonItem>
								<IonItem onClick={signOut}>
									Sign Out
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
