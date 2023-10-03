import { Share } from '@capacitor/share'
import { IonButton, IonButtons, IonIcon, IonToolbar } from '@ionic/react'
import { bookmark, bookmarkOutline, heart, heartOutline, shareSocial } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Firebase from '../../api/firebase/firebase'
import formatCount from '../../api/numberFormat'
import { baseUrl, like, saveOutfit, unlike, unsaveOutfit } from '../../api/wit-api/endPoints'
const PostToolbar = ({ postInfo }) => {
	const [isLiked, setIsLiked] = useState(postInfo.isLiked)
	const [isSaved, setIsSaved] = useState(postInfo.isSaved)
	const firebase = new Firebase()
	const [currentUser, loading] = useAuthState(firebase.auth)

	const sharePost = async () => {
		await Share.share({
			url: `https://wearittomorrow.com/posts/${postInfo.id}`
		})
	}

	const likeOutfit = async () => {
		const idToken = await currentUser.getIdToken(true)

		await fetch(`${baseUrl}${like}`, {
			method: 'PUT',
			headers: {
				Authorization: idToken,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				outfitId: postInfo.id
			})
		})
	}
	const unlikeOutfit = async () => {
		const idToken = await currentUser.getIdToken(true)

		await fetch(`${baseUrl}${unlike}`, {
			method: 'PUT',
			headers: {
				Authorization: idToken,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				outfitId: postInfo.id
			})
		})
	}

	const save = async () => {
		const idToken = await currentUser.getIdToken(true)

		await fetch(`${baseUrl}${saveOutfit}`, {
			method: 'PUT',
			headers: {
				Authorization: idToken,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				outfitId: postInfo.id
			})
		})
	}

	const unsave = async () => {
		const idToken = await currentUser.getIdToken(true)

		await fetch(`${baseUrl}${unsaveOutfit}`, {
			method: 'PUT',
			headers: {
				Authorization: idToken,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				outfitId: postInfo.id
			})
		})
	}

	useEffect(() => {
		if (loading) return
	}, [loading])

	return (
		<IonToolbar color={'transparent'}>
			<IonButtons
				slot="start"
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<IonButton
					color={'danger'}
					onClick={() => {
						isLiked ? unlikeOutfit() : likeOutfit()
						setIsLiked(!isLiked)
					}}
				>
					<IonIcon icon={isLiked ? heart : heartOutline}></IonIcon>
				</IonButton>
				<IonButton
					style={{
						color: '#000',
						marginTop: '0',
						fontWeight: '500',
						fontSize: '.88em',
						fontFamily: ` -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
					}}
				>
					<span>{formatCount(1947623)}</span>
				</IonButton>
			</IonButtons>
			<IonButtons slot="start"></IonButtons>

			<IonButtons slot="end">
				<IonButton onClick={sharePost}>
					<IonIcon icon={shareSocial}></IonIcon>
				</IonButton>
				<IonButton
					onClick={() => {
						isSaved ? unsave() : save()
						setIsSaved(!isSaved)
					}}
				>
					<IonIcon icon={isSaved ? bookmark : bookmarkOutline}></IonIcon>
				</IonButton>
			</IonButtons>
		</IonToolbar>
	)
}

export default PostToolbar
