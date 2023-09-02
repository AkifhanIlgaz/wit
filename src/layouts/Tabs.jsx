import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { earth, homeOutline, notifications, person } from 'ionicons/icons'
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
				<IonTabBar slot="bottom">
					<IonTabButton tab="home" href="/home">
						<IonIcon icon={homeOutline}></IonIcon>
					</IonTabButton>
					<IonTabButton tab="search" href="/search">
						<IonIcon icon={earth}></IonIcon>
					</IonTabButton>
					<IonTabButton tab="notifications" href="/notifications">
						<IonIcon icon={notifications}></IonIcon>
					</IonTabButton>
					<IonTabButton tab="profile" href="/me">
						<IonIcon icon={person}></IonIcon>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		)
	)
}

export default Tabs
