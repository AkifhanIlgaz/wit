import { IonActionSheet, IonButton, IonIcon } from '@ionic/react'
import { checkmark } from 'ionicons/icons'
import { Fragment, useState } from 'react'

const FollowButton = ({ isFollowed }) => {
	const [stateIsFollowed, setStateIsFollowed] = useState(isFollowed)
	const [isActionSheetOpen, setIsActionSheetOpen] = useState(false)

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
		<Fragment>
			<IonButton
				size="small"
				color={'tertiary'}
				className="button-text "
				style={{
					marginRight: '5px'
				}}
				onClick={() => setIsActionSheetOpen(true)}
			>
				<IonIcon icon={checkmark} slot="end"></IonIcon>
				Following
			</IonButton>
			<IonActionSheet
				isOpen={isActionSheetOpen}
				buttons={[
					{
						text: 'Unfollow',
						role: 'destructive',
						handler: () => {
							setStateIsFollowed(!stateIsFollowed)
						}
					},
					{
						text: 'Cancel',
						role: 'cancel'
					}
				]}
				onDidDismiss={() => setIsActionSheetOpen(false)}
			></IonActionSheet>
		</Fragment>
	)
}

export default FollowButton
