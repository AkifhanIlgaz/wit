import { IonCol, IonGrid, IonRow } from '@ionic/react'
import ProfileHeaderBox from '../components/UserInfoBox'
import profilePhoto from '../images/profilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const Profile = () => {
	const userInfo = {
		userName: 'Zozak Mumu',
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
				{/* <IonRow
					style={{
						height: '10vh'
					}}
					className="ion-align-items-center ion-justify-content-center"
				>
					<IonCol
						style={{
							textAlign: 'center'
						}}
					>
						<img src={profilePhoto} alt="User Profile Photo" className="profile-photo" />
						<div>
							<span>{userInfo.userName}</span>
						</div>
					</IonCol>
				</IonRow> */}
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
