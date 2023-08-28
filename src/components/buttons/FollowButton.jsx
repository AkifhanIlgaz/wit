import { IonButton } from '@ionic/react'

const FollowButton = ({ isFollowed }) => {
	return isFollowed ? (
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
	) : (
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

export default FollowButton
