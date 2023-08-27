import { IonGrid } from '@ionic/react'
import { useState } from 'react'
import PostTabs from '../components/PostTabs'
import Posts from '../components/Posts'
import ProfileAnalytics from '../components/ProfileAnalytics'
import ProfileHeader from '../components/ProfileHeader'
import defaultPostPhoto from '../images/defaultPostPhoto.jpg'
import defaultSavedPhoto from '../images/defaultSavedPhoto.jpg'
import Authorized from '../layouts/Authorized'

const Profile = () => {
	const [selectedTab, setSelectedTab] = useState('posts')
	const userInfo = {
		header: {
			userName: 'gayesuakyol',
			photoUrl: 'https://media.istockphoto.com/id/1419410282/tr/foto%C4%9Fraf/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=5LYU9_3FnIq_J5-X2a64OgqObDsx-50mdeTv3Y1bM1g=',
			isFollowed: true,
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
			<PostTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<Posts photoUrl={selectedTab === 'saved' ? userInfo.savedPhoto : userInfo.postPhoto} />
		</Authorized>
	)
}

export default Profile
