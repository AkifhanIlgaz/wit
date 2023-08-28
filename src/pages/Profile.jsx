import { IonGrid } from '@ionic/react'
import { useState } from 'react'
import PostTabs from '../components/PostTabs'
import Posts from '../components/Posts'
import ProfileAnalytics from '../components/ProfileAnalytics'
import ProfileHeader from '../components/ProfileHeader'
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
		posts: [
			{ id: '64ec40bdfc13ae459dad21df', photoUrl: 'http://dummyimage.com/419x100.png/5fa2dd/ffffff' },
			{ id: '64ec40bdfc13ae459dad21e0', photoUrl: 'http://dummyimage.com/325x100.png/5fa2dd/ffffff' },
			{ id: '64ec40bdfc13ae459dad21e1', photoUrl: 'http://dummyimage.com/239x100.png/dddddd/000000' },
			{ id: '64ec40bdfc13ae459dad21e2', photoUrl: 'http://dummyimage.com/309x100.png/5fa2dd/ffffff' },
			{ id: '64ec40bdfc13ae459dad21e3', photoUrl: 'http://dummyimage.com/406x100.png/cc0000/ffffff' },
			{ id: '64ec40bdfc13ae459dad21e4', photoUrl: 'http://dummyimage.com/363x100.png/ff4444/ffffff' }
		],
		saved: [
			{ id: '64ec40d8fc13ae7345ad21df', photoUrl: 'http://dummyimage.com/380x100.png/cc0000/ffffff' },
			{ id: '64ec40d8fc13ae7345ad21e0', photoUrl: 'http://dummyimage.com/205x100.png/dddddd/000000' },
			{ id: '64ec40d8fc13ae7345ad21e1', photoUrl: 'http://dummyimage.com/168x100.png/cc0000/ffffff' },
			{ id: '64ec40d8fc13ae7345ad21e2', photoUrl: 'http://dummyimage.com/112x100.png/cc0000/ffffff' },
			{ id: '64ec40d8fc13ae7345ad21e3', photoUrl: 'http://dummyimage.com/351x100.png/5fa2dd/ffffff' },
			{ id: '64ec40d8fc13ae7345ad21e4', photoUrl: 'http://dummyimage.com/363x100.png/5fa2dd/ffffff' }
		]
	}

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

export default Profile
