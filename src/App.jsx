import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'

/* Theme variables */
import React from 'react'
import { Redirect, Route } from 'react-router'
import { useRecoilValue } from 'recoil'
import userState from './atoms/user'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Tabs from './layouts/Tabs'
import './theme/style.scss'
import './theme/variables.css'
setupIonicReact()

const App = () => {
	const user = useRecoilValue(userState)

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					{user ? (
						<>
							<Route path={['/', '/signin', '/signup', '/password-reset', '/forgot-password']} exact={true}>
								<Redirect to="/home"></Redirect>
							</Route>
						</>
					) : (
						<>
							<Route path={'/'}>
								<Redirect to={'/signin'}></Redirect>
							</Route>
							<Route path={'/signin'}>
								<SignIn />
							</Route>
							<Route path={'/signup'}>
								<SignUp />
							</Route>
						</>
					)}
				</IonRouterOutlet>
				<Tabs />
			</IonReactRouter>
		</IonApp>
	)
}

export default App
