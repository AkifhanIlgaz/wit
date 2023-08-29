import { IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import { settingsOutline } from 'ionicons/icons'
import { useState } from 'react'
import DefaultButton from '../components/buttons/DefaultButton'
import PostTabs from '../components/post/PostTabs'
import Posts from '../components/post/Posts'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import ProfilePhoto from '../components/profile/ProfilePhoto'
import Authorized from '../layouts/Authorized'

const MyProfile = ({ userInfo }) => {
	const [selectedTab, setSelectedTab] = useState('posts')

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
				<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
					<ProfilePhoto photoUrl={userInfo.profilePhoto} />
					<IonCol pull=".4" size="7">
						<span className="username ion-no-margin">{userInfo.userName}</span>
						<div
							style={{
								paddingTop: '5px'
							}}
						>
							<DefaultButton text={'Edit Profile'} />
							<DefaultButton>
								<IonIcon icon={settingsOutline}></IonIcon>
							</DefaultButton>
						</div>
					</IonCol>
				</IonRow>
				<ProfileAnalytics analytics={analytics} />
			</IonGrid>
			<PostTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<Posts posts={selectedTab === 'saved' ? userInfo.saved : userInfo.posts} />
		</Authorized>
	)
}

export default MyProfile
