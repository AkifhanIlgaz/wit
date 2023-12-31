import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { IonFab, IonFabButton, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { add, homeOutline, person } from 'ionicons/icons'
import { Fragment, useState } from 'react'
import { Route } from 'react-router'
import { useRecoilValue } from 'recoil'
import userState from '../atoms/user'
import AddOutfit from '../components/outfit/AddOutfit'
import Outfit from '../components/outfit/Outfit'
import ProfileRouter from '../components/profile/ProfileRouter'
import EditProfile from '../pages/EditProfile'
import Home from '../pages/Home'
import Search from '../pages/Search'

const Tabs = () => {
	const user = useRecoilValue(userState)
	const [photo, setPhoto] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			source: CameraSource.Photos,
			resultType: CameraResultType.DataUrl
		})

		setPhoto(image)
		setIsOpen(true)
	}

	return (
		user && (
			<Fragment>
				<IonTabs>
					<IonRouterOutlet>
						<Route exact path={'/home'} render={() => <Home />} />
						<Route exact path={'/user/:uid'} render={() => <ProfileRouter />} />
						<Route exact path={'/outfit/:outfitId'} render={() => <Outfit />} />
						<Route exact path={'/edit-profile'} render={() => <EditProfile />} />
						<Route exact path={'/search'} render={() => <Search />} />
					</IonRouterOutlet>
					<IonTabBar slot="bottom" color={'transparent'} style={{ height: '6vh' }}>
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

						<IonTabButton tab="profile" href={`/user/${user.uid}`}>
							<IonIcon icon={person}></IonIcon>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
				<AddOutfit isOpen={isOpen} setIsOpen={setIsOpen} photo={photo} />
			</Fragment>
		)
	)
}

export default Tabs
