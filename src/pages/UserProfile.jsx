import { IonGrid } from '@ionic/react'
import { useState } from 'react'
import PostTabs from '../components/PostTabs'
import Posts from '../components/Posts'
import ProfileAnalytics from '../components/ProfileAnalytics'
import ProfileHeader from '../components/ProfileHeader'
import Authorized from '../layouts/Authorized'

const UserProfile = ({ userInfo }) => {
	const [selectedTab, setSelectedTab] = useState('posts')
	return (
		<Authorized>
			<IonGrid className="ion-no-padding">
				<ProfileHeader header={userInfo.header} />
				<ProfileAnalytics analytics={userInfo.analytics} />
			</IonGrid>
			<PostTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<Posts posts={selectedTab === 'saved' ? userInfo.saved : userInfo.posts} />
		</Authorized>
	)
}

export default UserProfile
