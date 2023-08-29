import { IonGrid } from '@ionic/react'
import Posts from '../components/post/Posts'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import ProfileHeader from '../components/profile/ProfileHeader'
import Authorized from '../layouts/Authorized'

const UserProfile = ({ userInfo }) => {
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
				<ProfileHeader header={header} />
				<ProfileAnalytics analytics={analytics} />
			</IonGrid>
			<Posts posts={userInfo.posts} />
		</Authorized>
	)
}

export default UserProfile
