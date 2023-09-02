import { IonFab, IonFabButton, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { add, homeOutline, person } from 'ionicons/icons'
import { Redirect, Route } from 'react-router'
import { useRecoilValue } from 'recoil'
import userState from '../atoms/user'
import ProfileRouter from '../components/profile/ProfileRouter'
import Home from '../pages/Home'
import Post from '../pages/Post'

const Tabs = () => {
	const user = useRecoilValue(userState)

	return (
		user && (
			<IonTabs>
				<IonRouterOutlet>
					<Route path={['/', '/signin', '/signup', '/password-reset', '/forgot-password']} exact={true}>
						<Redirect to="/home"></Redirect>
					</Route>
					<Route exact path={'/home'} render={() => <Home />} />
					<Route exact path={'/user/:username'} render={() => <ProfileRouter />} />
					<Route exact path={'/posts/:postId'} render={() => <Post />} />
				</IonRouterOutlet>
				<IonTabBar slot="bottom" color={'transparent'}>
					<IonTabButton tab="home" href="/home">
						<IonIcon icon={homeOutline}></IonIcon>
					</IonTabButton>
					<IonTabButton>
						<IonFab>
							<IonFabButton size="small" color={'dark'}>
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
		)
	)
}

export default Tabs
