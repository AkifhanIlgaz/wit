import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react'
import { bookmark, bookmarkOutline, chatbubbleOutline, heart, heartOutline, shareSocialOutline } from 'ionicons/icons'
import { Fragment, useState } from 'react'
import ModalHeader from '../helper/ModalHeader'

const Post = ({ setIsOpen, post }) => {
	const [isSaved, setIsSaved] = useState(false)
	const [isLiked, setIsLiked] = useState(false)
	const [likeCount, setLikeCount] = useState(post.likeCount)

	// TODO: Update like count on firestore if it's different from initial count

	return (
		<Fragment>
			<ModalHeader setIsOpen={setIsOpen} />
			<IonGrid className="ion-height ion-no-padding ion-no-margin">
				<IonRow className="ion-height">
					<IonCol>
						<img src={post.photoUrl} alt="" height={'60%'} />
						<IonToolbar color={'transparent'}>
							<IonButtons slot="start">
								<IonButton
									onClick={() => {
										isLiked ? setLikeCount(l => l - 1) : setLikeCount(l => l + 1)
										setIsLiked(!isLiked)
									}}
									color={'danger'}
								>
									<IonIcon icon={isLiked ? heart : heartOutline}></IonIcon>
								</IonButton>
								<IonButton>
									<IonIcon icon={chatbubbleOutline}></IonIcon>
								</IonButton>
								<IonButton>
									<IonIcon icon={shareSocialOutline}></IonIcon>
								</IonButton>
							</IonButtons>

							<IonButtons slot="end">
								<IonButton onClick={() => setIsSaved(!isSaved)}>
									<IonIcon icon={isSaved ? bookmark : bookmarkOutline}></IonIcon>
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
