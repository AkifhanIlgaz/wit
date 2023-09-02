import { IonActionSheet, IonButton, IonIcon } from '@ionic/react'
import { checkmark } from 'ionicons/icons'
import { Fragment, useState } from 'react'

const FollowButton = ({ isFollowed }) => {
	const [stateIsFollowed, setStateIsFollowed] = useState(isFollowed)
	const [isActionSheetOpen, setIsActionSheetOpen] = useState(false)

	return stateIsFollowed === false ? (
		<IonButton
			color={'button-background'}
			className="button-text"
			style={{
				marginRight: '5px'
			}}
			size="small"
			expand="block"
			shape="round"
			onClick={() => setStateIsFollowed(true)}
		>
			Follow
		</IonButton>
	) : (
		<Fragment>
			<IonButton
				color={'dark'}
				className="button-text "
				style={{
					marginRight: '5px'
				}}
				expand="block"
				shape="round"
				size="small"
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
							setIsActionSheetOpen(false)
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
