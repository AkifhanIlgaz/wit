import { IonButton } from '@ionic/react'

const DefaultButton = ({ text, children }) => {
	return (
		<IonButton color={'button-background'} className="button-text" expand="block" shape="round">
			{text}
			{children}
		</IonButton>
	)
}

export default DefaultButton
