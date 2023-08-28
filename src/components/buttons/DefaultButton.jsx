import { IonButton } from '@ionic/react'

const DefaultButton = ({ text, children }) => {
	return (
		<IonButton size="small" color={'button-background'} className="button-text">
			{text}
			{children}
		</IonButton>
	)
}

export default DefaultButton
