import { Share } from '@capacitor/share'
import { IonButton, IonButtons, IonIcon, IonToolbar } from '@ionic/react'
import { bookmark, bookmarkOutline, heart, heartOutline, shareSocial } from 'ionicons/icons'
import { useState } from 'react'
import formatCount from '../../api/numberFormat'
const PostToolbar = ({ postInfo }) => {
	// TODO: Get initial values of states by props
	const [isLiked, setIsLiked] = useState(postInfo.isLiked)
	const [isSaved, setIsSaved] = useState(postInfo.isSaved)

	const sharePost = async () => {
		await Share.share({
			url: `https://wearittomorrow.com/posts/${postInfo.id}`
		})
	}

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
				<IonButton color={'danger'} onClick={() => setIsLiked(!isLiked)}>
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
				<IonButton onClick={() => setIsSaved(!isSaved)}>
					<IonIcon icon={isSaved ? bookmark : bookmarkOutline}></IonIcon>
				</IonButton>
			</IonButtons>
		</IonToolbar>
	)
}

export default PostToolbar
