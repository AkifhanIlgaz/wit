import { IonContent, IonPage } from '@ionic/react'

export const Authorized = ({ children }) => {
	return (
		<IonPage>
			<IonContent scrollY={false}>{children}</IonContent>
		</IonPage>
	)
}

export default Authorized
