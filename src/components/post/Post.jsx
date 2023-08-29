import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react'
import { bookmark, bookmarkOutline, heart, heartOutline, shareSocialOutline } from 'ionicons/icons'
import { Fragment, useEffect, useState } from 'react'
import ModalHeader from '../helper/ModalHeader'

const Post = ({ setIsOpen, post }) => {
	const [isLiked, setIsLiked] = useState(post.isLiked)
	const [isSaved, setIsSaved] = useState(post.isSaved)

	// TODO: Update like count on firestore if it's different from initial count

	useEffect(() => {
		return () => {
			// TODO: Update liked & saved status on database
			console.log('post liked: ', post.isLiked)
		}
	}, [])

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
										setIsLiked(!isLiked)
										post.isLiked = !post.isLiked
									}}
									color={'danger'}
								>
									<IonIcon icon={isLiked ? heart : heartOutline}></IonIcon>
								</IonButton>
								<IonButton>
									<IonIcon icon={shareSocialOutline}></IonIcon>
								</IonButton>
							</IonButtons>

							<IonButtons slot="end">
								<IonButton
									onClick={() => {
										setIsSaved(!isSaved)
										post.isSaved = !post.isSaved
									}}
								>
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
