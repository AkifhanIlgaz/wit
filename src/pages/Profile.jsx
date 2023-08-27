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
		posts: [{ photoUrl: 'http://dummyimage.com/300x449.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/400x123.png/cc0000/ffffff' }, { photoUrl: 'http://dummyimage.com/384x309.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/244x157.png/cc0000/ffffff' }, { photoUrl: 'http://dummyimage.com/327x305.png/cc0000/ffffff' }, { photoUrl: 'http://dummyimage.com/302x361.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/229x258.png/5fa2dd/ffffff' }, { photoUrl: 'http://dummyimage.com/225x158.png/dddddd/000000' }, { photoUrl: 'http://dummyimage.com/416x406.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/182x113.png/ff4444/ffffff' }],
		saved: [{ photoUrl: 'http://dummyimage.com/327x305.png/cc0000/ffffff' }, { photoUrl: 'http://dummyimage.com/302x361.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/229x258.png/5fa2dd/ffffff' }, { photoUrl: 'http://dummyimage.com/225x158.png/dddddd/000000' }, { photoUrl: 'http://dummyimage.com/416x406.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/182x113.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/364x349.png/5fa2dd/ffffff' }, { photoUrl: 'http://dummyimage.com/500x215.png/cc0000/ffffff' }, { photoUrl: 'http://dummyimage.com/300x449.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/400x123.png/cc0000/ffffff' }, { photoUrl: 'http://dummyimage.com/384x309.png/ff4444/ffffff' }, { photoUrl: 'http://dummyimage.com/244x157.png/cc0000/ffffff' }]
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
