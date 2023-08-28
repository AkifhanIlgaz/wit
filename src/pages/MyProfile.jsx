import { IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import { settingsOutline } from 'ionicons/icons'
import { useState } from 'react'
import PostTabs from '../components/PostTabs'
import Posts from '../components/Posts'
import ProfileAnalytics from '../components/ProfileAnalytics'
import DefaultButton from '../components/buttons/DefaultButton'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const MyProfile = ({ userInfo }) => {
	const [selectedTab, setSelectedTab] = useState('posts')

	return (
		<Authorized>
			<IonGrid className="ion-no-padding">
				<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
					<IonCol
						push=".4"
						size="4"
						style={{
							paddingBottom: '0px',
							paddingTop: '0px'
						}}
					>
						<img src={userInfo.header.photoUrl || defaultProfilePhoto} alt="User Profile Photo" className="profile-photo" />
					</IonCol>
					<IonCol pull=".4" size="7">
						<span className="username ion-no-margin">{userInfo.header.userName}</span>
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
				<ProfileAnalytics analytics={userInfo.analytics} />
			</IonGrid>
			<PostTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<Posts posts={selectedTab === 'saved' ? userInfo.saved : userInfo.posts} />
		</Authorized>
	)
}

export default MyProfile
