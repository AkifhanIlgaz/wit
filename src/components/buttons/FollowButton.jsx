import { IonActionSheet, IonButton, useIonAlert } from '@ionic/react'
import { Fragment, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Firebase from '../../api/firebase/firebase'
import { baseUrl, follow, unfollow } from '../../api/wit-api/endPoints'

const FollowButton = ({ isFollowed, uid }) => {
	const [stateIsFollowed, setStateIsFollowed] = useState(isFollowed)
	const [isActionSheetOpen, setIsActionSheetOpen] = useState(false)
	const [presentAlert] = useIonAlert()
	const firebase = new Firebase()
	const [currentUser, loading] = useAuthState(firebase.auth)

	const data = new URLSearchParams()
	data.append('uid', uid)

	const followUser = async () => {
		const idToken = await currentUser.getIdToken(true)
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

	const unfollowUser = async () => {
		const idToken = await currentUser.getIdToken(true)
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

	useEffect(() => {
		if (loading) return
	}, [loading])

	return (stateIsFollowed === undefined ? isFollowed === false : stateIsFollowed === false) ? (
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
				onDidDismiss={() => setIsActionSheetOpen(false)}
			></IonActionSheet>
		</Fragment>
	)
}

export default FollowButton
