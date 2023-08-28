import { IonButton } from '@ionic/react'

const FollowingButton = () => {
	return (
		<IonButton
			size="small"
			color={'tertiary'}
			className="button-text "
			style={{
				marginRight: '5px'
			}}
		>
			<span>Following</span>
		</IonButton>
	)
}

export default FollowingButton
