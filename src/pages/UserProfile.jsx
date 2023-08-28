import { IonGrid } from '@ionic/react'
import Posts from '../components/post/Posts'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import ProfileHeader from '../components/profile/ProfileHeader'
import Authorized from '../layouts/Authorized'

const UserProfile = ({ userInfo }) => {
	return (
		<Authorized>
			<IonGrid className="ion-no-padding">
				<ProfileHeader header={userInfo.header} />
				<ProfileAnalytics analytics={userInfo.analytics} />
			</IonGrid>
			<Posts posts={userInfo.posts} />
		</Authorized>
	)
}

export default UserProfile
