import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { IonButton, IonButtons, IonCard, IonCardContent, IonFab, IonFabButton, IonIcon, IonModal, IonPopover, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonToolbar } from '@ionic/react'
import { add, homeOutline, person } from 'ionicons/icons'
import { Fragment, useState } from 'react'
import { Route } from 'react-router'
import { useRecoilValue } from 'recoil'
import userState from '../atoms/user'
import ProfileRouter from '../components/profile/ProfileRouter'
import EditProfile from '../pages/EditProfile'
import Home from '../pages/Home'
import Post from '../pages/Post'

const Tabs = () => {
	const user = useRecoilValue(userState)
	const [photo, setPhoto] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			source: CameraSource.Photos,
			resultType: CameraResultType.Uri
		})

		setPhoto(image.webPath)
		setIsOpen(true)
	}

	return (
		user && (
			<Fragment>
				<IonTabs>
					<IonRouterOutlet>
						<Route exact path={'/home'} render={() => <Home />} />
						<Route exact path={'/user/:username'} render={() => <ProfileRouter />} />
						<Route exact path={'/posts/:postId'} render={() => <Post />} />
						<Route exact path={'/edit-profile'} render={() => <EditProfile />} />
					</IonRouterOutlet>
					<IonTabBar slot="bottom" color={'transparent'}>
						<IonTabButton tab="home" href="/home">
							<IonIcon icon={homeOutline}></IonIcon>
						</IonTabButton>
						<IonTabButton>
							<IonFab>
								<IonFabButton size="small" color={'dark'} onClick={takePicture}>
									<IonIcon icon={add}></IonIcon>
								</IonFabButton>
							</IonFab>
						</IonTabButton>
						{/* TODO: user/${user.username} */}
						<IonTabButton tab="profile" href={`/user/gayesuakyol`}>
							<IonIcon icon={person}></IonIcon>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
				<IonModal isOpen={isOpen}>
					<IonPopover isOpen dismissOnSelect>
						<IonCard>
							<IonCardContent>Click on the outfit to add additional info</IonCardContent>
						</IonCard>
					</IonPopover>

					<IonToolbar color={'transparent'}>
						<IonButtons slot="start">
							<IonButton onClick={() => setIsOpen(false)}>Cancel</IonButton>
						</IonButtons>
						<IonButtons slot="end">
							<IonButton onClick={() => setIsOpen(false)}>Save</IonButton>
						</IonButtons>
					</IonToolbar>
					<img src={photo} alt="" width={'100%'} height={'100%'} />
				</IonModal>
			</Fragment>
		)
	)
}

export default Tabs
