import { Share } from '@capacitor/share'
import { IonButton, IonButtons, IonIcon, IonToolbar } from '@ionic/react'
import { bookmark, bookmarkOutline, heart, heartOutline, shareSocial } from 'ionicons/icons'
import { useState } from 'react'
const PostToolbar = () => {
	// TODO: Get initial values of states by props
	const [isLiked, setIsLiked] = useState(false)
	const [isSaved, setIsSaved] = useState(false)

	const sharePost = async () => {
		await Share.share({
			// ?  `https://wearittomorrow.com/posts/${post.postId}`
			url: `https://wearittomorrow.com/posts/`
		})
	}

	return (
		<IonToolbar color={'transparent'}>
			<IonButtons slot="start">
				<IonButton color={'danger'} onClick={() => setIsLiked(!isLiked)}>
					<IonIcon icon={isLiked ? heart : heartOutline}></IonIcon>
				</IonButton>
				<IonButton onClick={sharePost}>
					<IonIcon icon={shareSocial}></IonIcon>
				</IonButton>
			</IonButtons>
			<IonButtons slot="end">
				<IonButton onClick={() => setIsSaved(!isSaved)}>
					<IonIcon icon={isSaved ? bookmark : bookmarkOutline}></IonIcon>
				</IonButton>
			</IonButtons>
		</IonToolbar>
	)
}

export default PostToolbar
