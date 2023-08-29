import { IonButton, IonIcon } from '@ionic/react'
import { checkmark } from 'ionicons/icons'
import { useState } from 'react'

const FollowButton = ({ isFollowed }) => {
	const [stateIsFollowed, setStateIsFollowed] = useState(isFollowed)

	return stateIsFollowed ? (
		<IonButton
			size="small"
			color={'button-background'}
			className="button-text "
			style={{
				marginRight: '5px'
			}}
			onClick={() => setStateIsFollowed(!stateIsFollowed)}
		>
			Follow
		</IonButton>
	) : (
		<IonButton
			size="small"
			color={'tertiary'}
			className="button-text "
			style={{
				marginRight: '5px'
			}}
			onClick={() => setStateIsFollowed(!stateIsFollowed)}
		>
			<IonIcon icon={checkmark} slot="end"></IonIcon>
			Following
		</IonButton>
	)
}

export default FollowButton
