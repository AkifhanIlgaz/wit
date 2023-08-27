import { IonGrid } from '@ionic/react'
import Posts from '../components/Posts'
import ProfileAnalytics from '../components/ProfileAnalytics'
import ProfileHeader from '../components/ProfileHeader'
import Authorized from '../layouts/Authorized'

const Profile = () => {
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
		}
	}

	return (
		<Authorized>
			<IonGrid
				style={{
					paddingLeft: '0',
					paddingRight: '0'
				}}
			>
				<ProfileHeader header={userInfo.header} />
				<ProfileAnalytics analytics={userInfo.analytics} />
			</IonGrid>
			{/* TODO: Use infinite scroll */}
			<Posts />
		</Authorized>
	)
}

export default Profile
