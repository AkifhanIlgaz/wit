import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import { appsSharp, bookmarkSharp } from 'ionicons/icons'
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
					paddingRight: '0',
					paddingBottom: '0'
				}}
			>
				<ProfileHeader header={userInfo.header} />
				<ProfileAnalytics analytics={userInfo.analytics} />
			</IonGrid>
			{/* TODO: Use infinite scroll */}

			<IonGrid className="ion-no-padding">
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonCol
						className="ion-no-padding"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<IonButton color={'transparent'}>
							<IonIcon icon={appsSharp} color="medium"></IonIcon>
						</IonButton>
					</IonCol>
					<IonCol
						className="ion-no-padding"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<IonButton color={'transparent'}>
							<IonIcon icon={bookmarkSharp} color="primary"></IonIcon>
						</IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>

			<Posts />
		</Authorized>
	)
}

export default Profile
