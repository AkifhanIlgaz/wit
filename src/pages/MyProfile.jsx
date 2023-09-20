import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonItem, IonList, IonPopover, IonRow, IonToolbar } from '@ionic/react'
import { ellipsisVertical, logOutOutline, pencilOutline, settingsOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import Firebase from '../api/firebase/firebase'
import { allOutfits, baseUrl } from '../api/wit-api/endPoints'
import userState from '../atoms/user'
import LogoTitle from '../components/LogoTitle'
import PostTabs from '../components/post/PostTabs'
import Posts from '../components/post/Posts'
import ProfileAnalytics from '../components/profile/ProfileAnalytics'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const MyProfile = ({ userInfo, uid }) => {
	const [selectedTab, setSelectedTab] = useState('posts')
	const [user, setUser] = useRecoilState(userState)
	const [outfits, setOutfits] = useState([])
	const [saved, setSaved] = useState([])
	const history = useHistory()
	const firebase = new Firebase()

	const signOut = async () => {
		const res = await firebase.signOut()
		setUser(res)
		history.push('/home')
	}

	const getOutfits = async () => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			const res = await fetch(
				`${baseUrl}${allOutfits}?` +
					new URLSearchParams({
						uid: uid
					}),
				{
					method: 'GET',
					headers: {
						Authorization: idToken
					}
				}
			)

			const newOutfits = await res.json()
			
			setOutfits([...outfits, ...newOutfits])
		})
	}

	const getSaved = async () => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			const res = await fetch(
				`${baseUrl}${allOutfits}?` +
					new URLSearchParams({
						uid: uid
					}),
				{
					method: 'GET',
					headers: {
						Authorization: idToken
					}
				}
			)

			const newOutfits = await res.json()
			console.log([...outfits, ...newOutfits])
			setOutfits([...outfits, ...newOutfits])
		})
	}

	useEffect(() => {
		const fetchData = async () => {
			await getOutfits()
			// await getSaved()
		}

		fetchData()
	}, [])

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
						<img src={userInfo.photoUrl || defaultProfilePhoto} alt="User Profile Photo" className="profile-photo" />
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
						<h3>{userInfo.displayName}</h3>
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonCol
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
						className="title"
					></IonCol>
				</IonRow>

				<ProfileAnalytics
					analytics={{
						outfitCount: userInfo.outfits ? userInfo.outfits.length : 0,
						followers: userInfo.followers || [],
						followings: userInfo.followings || []
					}}
				/>
			</IonGrid>
			<PostTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			{/* TODO: Delete empty arrays */}
			<Posts posts={selectedTab === 'saved' ? userInfo.saved || [] : outfits} />
		</Authorized>
	)
}

export default MyProfile
