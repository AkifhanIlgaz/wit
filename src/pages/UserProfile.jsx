import { IonGrid } from '@ionic/react'
import Posts from '../components/Posts'
import ProfileAnalytics from '../components/ProfileAnalytics'
import ProfileHeader from '../components/ProfileHeader'
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
