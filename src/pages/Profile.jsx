import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import { appsOutline, bookmark, bookmarks, bookmarksOutline } from 'ionicons/icons'
import { useState } from 'react'
import Posts from '../components/Posts'
import ProfileAnalytics from '../components/ProfileAnalytics'
import ProfileHeader from '../components/ProfileHeader'
import defaultPostPhoto from '../images/defaultPostPhoto.jpg'
import defaultSavedPhoto from '../images/defaultSavedPhoto.jpg'
import Authorized from '../layouts/Authorized'

const iconColor = selectedTab => {
	return selectedTab === 'saved' ? 'primary' : 'medium'
}

const Profile = () => {
	const [selectedTab, setSelectedTab] = useState('posts')
	const userInfo = {
		header: {
			userName: 'gayesuakyol',
			photoUrl: 'https://media.istockphoto.com/id/1419410282/tr/foto%C4%9Fraf/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=5LYU9_3FnIq_J5-X2a64OgqObDsx-50mdeTv3Y1bM1g=',
			isFollowed: false,
			isSendMessageDisabled: false
		},
		analytics: {
			followers: {
				title: 'Followers',
				count: 77
			},
			following: {
				title: 'Following',
				count: 982
			},
			posts: {
				title: 'Posts',
				count: 7
			}
		},
		postPhoto: defaultPostPhoto,
		savedPhoto: defaultSavedPhoto
	}

	return (
		<Authorized>
			<IonGrid className="ion-no-padding">
				<ProfileHeader header={userInfo.header} />
				<ProfileAnalytics analytics={userInfo.analytics} />
			</IonGrid>
			{/* TODO: Use infinite scroll */}
			<IonGrid className="ion-no-padding">
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonCol
						className="ion-no-padding"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
						onClick={() => setSelectedTab('posts')}
					>
						<IonButton color={'transparent'}>
							<IonIcon icon={appsOutline} color={selectedTab === 'posts' ? 'tertiary' : 'medium'}></IonIcon>
						</IonButton>
					</IonCol>
					<IonCol
						className="ion-no-padding"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
						onClick={() => setSelectedTab('saved')}
					>
						<IonButton color={'transparent'}>
							<IonIcon icon={bookmarksOutline} color={selectedTab === 'saved' ? 'tertiary' : 'medium'}></IonIcon>
						</IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>
			{/* TODO: Make photos responsive */}
			<Posts photoUrl={selectedTab === 'saved' ? userInfo.savedPhoto : userInfo.postPhoto} />
		</Authorized>
	)
}

export default Profile
