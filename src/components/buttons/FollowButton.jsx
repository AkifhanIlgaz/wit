import { IonActionSheet, IonButton, useIonAlert } from '@ionic/react'
import { Fragment, useState } from 'react'
import Firebase from '../../api/firebase/firebase'
import { baseUrl, follow, unfollow } from '../../api/wit-api/endPoints'

const FollowButton = ({ isFollowed, uid }) => {
	const [stateIsFollowed, setStateIsFollowed] = useState(isFollowed)
	const [isActionSheetOpen, setIsActionSheetOpen] = useState(false)
	const [presentAlert] = useIonAlert()
	const firebase = new Firebase()

	const data = new URLSearchParams()
	data.append('uid', uid)

	let idToken
	firebase.auth.onAuthStateChanged(async user => {
		idToken = await user.getIdToken(true)
	})

	const followUser = () => {
		setStateIsFollowed(true)
		fetch(`${baseUrl}${follow}`, {
			method: 'PUT',
			headers: {
				Authorization: idToken,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		}).then(res => {
			if (res.status === 500) {
				setStateIsFollowed(false)
				presentAlert({
					header: 'Error',
					message: 'Something went wrong!',
					buttons: ['OK']
				})
				return
			}
		})
	}

	const unfollowUser = () => {
		setStateIsFollowed(false)
		fetch(`${baseUrl}${unfollow}`, {
			method: 'PUT',
			headers: {
				Authorization: idToken,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		})
			.then(res => {
				if (res.status === 500) {
					setStateIsFollowed(true)
					presentAlert({
						header: 'Error',
						message: 'Something went wrong!',
						buttons: ['OK']
					})
				}
			})
			.finally(() => {
				setIsActionSheetOpen(false)
			})
	}

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
			onClick={followUser}
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
				Following
			</IonButton>
			<IonActionSheet
				isOpen={isActionSheetOpen}
				buttons={[
					{
						text: 'Unfollow',
						role: 'destructive',
						handler: unfollowUser
					},
					{
						text: 'Cancel',
						role: 'cancel'
					}
				]}
				// onDidDismiss={() => setIsActionSheetOpen(false)}
			></IonActionSheet>
		</Fragment>
	)
}

export default FollowButton
