import { IonGrid } from '@ionic/react'
import Posts from '../components/post/Posts'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import ProfileHeader from '../components/profile/ProfileHeader'
import Authorized from '../layouts/Authorized'

const UserProfile = ({ userInfo }) => {
	const header = {
		profilePhoto: userInfo.profilePhoto,
		userName: userInfo.userName,
		isFollowed: userInfo.isFollowed,
		isSendMessageDisabled: userInfo.isSendMessageDisabled
	}

	const analytics = {
		followerCount: userInfo.followerCount,
		followingCount: userInfo.followingCount,
		postCount: userInfo.postCount
	}

	return (
		<Authorized>
			<IonGrid className="ion-no-padding">
				<ProfileHeader header={header} />
				<ProfileAnalytics analytics={analytics} />
			</IonGrid>
			<Posts posts={userInfo.posts} />
		</Authorized>
	)
}

export default UserProfile
