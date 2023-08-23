import { IonContent, IonPage } from '@ionic/react'
import { useState } from 'react'

export const Authorized = ({ children }) => {
	const [count, setCount] = useState(0)

	return (
		<IonPage>
			<IonContent>{children}</IonContent>
		</IonPage>
	)
}

export default Authorized
