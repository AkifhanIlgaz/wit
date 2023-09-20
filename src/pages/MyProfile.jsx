import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonItem, IonList, IonPopover, IonRow, IonToolbar } from '@ionic/react'
import { ellipsisVertical, logOutOutline, pencilOutline, settingsOutline } from 'ionicons/icons'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import Firebase from '../api/firebase/firebase'
import userState from '../atoms/user'
import LogoTitle from '../components/LogoTitle'
import Outfits from '../components/outfit/Outfits'
import Saved from '../components/outfit/Saved'
import PostTabs from '../components/post/PostTabs'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const MyProfile = ({ userInfo, uid }) => {
	const [selectedTab, setSelectedTab] = useState('posts')
	const [user, setUser] = useRecoilState(userState)
	const history = useHistory()
	const firebase = new Firebase()

	const signOut = async () => {
		const res = await firebase.signOut()
		setUser(res)
		history.push('/home')
	}

	const getUser = async () => {}

	return (
		<Authorized>
			<IonGrid className="ion-no-padding">
				<IonToolbar
					color={'transparent'}
					style={{
						marginTop: '2%'
					}}
				>
					<LogoTitle />
					<IonButtons slot="end">
						<IonButton id="popover">
							<IonIcon icon={ellipsisVertical}></IonIcon>
						</IonButton>
						<IonPopover trigger="popover" side="bottom" alignment="center" dismissOnSelect>
							<IonList lines="none">
								<IonItem onClick={() => history.push('/edit-profile')}>
									Edit Profile
									<IonIcon size="small" icon={pencilOutline} slot="end"></IonIcon>
								</IonItem>
								<IonItem>
									Settings
									<IonIcon size="small" icon={settingsOutline} slot="end"></IonIcon>
								</IonItem>
								<IonItem onClick={signOut}>
									Sign Out
									<IonIcon color={'danger'} size="small" icon={logOutOutline} slot="end"></IonIcon>
								</IonItem>
							</IonList>
						</IonPopover>
					</IonButtons>
				</IonToolbar>

				<IonRow
					className="ion-align-items-center ion-justify-content-center"
					style={{
						marginTop: '1%'
					}}
				>
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<img src={user.photoUrl || defaultProfilePhoto} alt="User Profile Photo" className="profile-photo" />
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
						className="count"
					>
						<h3>{user.displayName}</h3>
					</IonCol>
				</IonRow>

				<ProfileAnalytics uid={uid} outfitCount={4} />
			</IonGrid>
			<PostTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			{selectedTab === 'saved' ? <Saved uid={uid} /> : <Outfits uid={uid} />}
		</Authorized>
	)
}

export default MyProfile
