import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { bookmark, bookmarkOutline, chatbubbleOutline, chevronBackOutline, heart, heartOutline } from 'ionicons/icons'
import { Fragment, useState } from 'react'

const Post = ({ setIsOpen, post }) => {
	const [isSaved, setIsSaved] = useState(false)
	const [isLiked, setIsLiked] = useState(false)
	const [likeCount, setLikeCount] = useState(post.likeCount)

	return (
		<Fragment>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton onClick={() => setIsOpen(false)}>
							<IonIcon icon={chevronBackOutline}></IonIcon>
						</IonButton>
					</IonButtons>
					<IonTitle>
						{/* TODO: Use app logo */}
						Wear It Tomorrow
					</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => setIsSaved(!isSaved)}>
							<IonIcon icon={isSaved ? bookmark : bookmarkOutline}></IonIcon>
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonGrid className="ion-height ion-no-padding ion-no-margin">
				<IonRow className="ion-height">
					<IonCol>
						<img src={post.photoUrl} alt="" height={'60%'} />
						<IonToolbar color={'transparent'}>
							<IonButtons slot="start">
								<IonButton
									onClick={() => {
										if (isLiked === true) {
											setLikeCount(l => l - 1)
										} else {
											setLikeCount(l => l + 1)
										}
										setIsLiked(!isLiked)
									}}
									color={'danger'}
								>
									<IonIcon icon={isLiked ? heart : heartOutline} slot="start"></IonIcon>
									{likeCount}
								</IonButton>
							</IonButtons>
							<IonButtons slot="end">
								<IonButton>
									<IonIcon icon={chatbubbleOutline}></IonIcon>
								</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonCol>
				</IonRow>
			</IonGrid>
		</Fragment>
	)
}

export default Post
