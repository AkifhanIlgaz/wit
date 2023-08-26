import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react'
import ProfileHeaderBox from '../components/UserInfoBox'
import profilePhoto from '../images/profilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const Profile = () => {
	const userInfo = {
		userName: 'gayesuakyol',
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

	return (
		<Authorized>
			<IonGrid>
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonCol
						push=".4"
						size="4"
						style={{
							paddingBottom: '0px',
							paddingTop: '0px'
						}}
					>
						<img src={profilePhoto} alt="User Profile Photo" className="profile-photo" />
					</IonCol>
					<IonCol pull=".4" size="7">
						<span className="username ion-no-margin">{userInfo.userName} </span>
						<div
							style={{
								paddingTop: '5px'
							}}
						>
							<IonButton
								size="small"
								color={'button-background'}
								className="button-text "
								style={{
									marginRight: '5px'
								}}
							>
								<span>Takip Et</span>
							</IonButton>
							<IonButton size="small" color={'button-background'} className="button-text">
								Mesaj Gönder
							</IonButton>
						</div>
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center ion-justify-content-space-around ">
					<IonCol
						size="12"
						className="ion-no-padding"
						style={{
							display: 'flex',
							justifyContent: 'space-around'
						}}
					>
						<ProfileHeaderBox boxInfo={userInfo.posts}></ProfileHeaderBox>
						<ProfileHeaderBox boxInfo={userInfo.following}></ProfileHeaderBox>
						<ProfileHeaderBox boxInfo={userInfo.followers}></ProfileHeaderBox>
					</IonCol>
				</IonRow>
			</IonGrid>
		</Authorized>
	)
}

export default Profile
