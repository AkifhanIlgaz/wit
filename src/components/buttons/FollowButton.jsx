import { IonButton } from '@ionic/react'

const FollowButton = () => {
	return (
		<IonButton
			size="small"
			color={'button-background'}
			className="button-text "
			style={{
				marginRight: '5px'
			}}
		>
			<span>Follow</span>
		</IonButton>
	)
}

export default FollowButton
