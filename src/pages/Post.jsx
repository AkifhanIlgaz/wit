import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { bookmark, bookmarkOutline, chevronBackOutline, heart, heartOutline, shareSocialOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getPostById } from '../api/mockUsers'
import Authorized from '../layouts/Authorized'

const Post = () => {
	const history = useHistory()
	const { postId } = useParams()
	const post = getPostById(postId)
	const [isLiked, setIsLiked] = useState(post.isLiked)
	const [isSaved, setIsSaved] = useState(post.isSaved)

	const changeLikeStatus = () => {
		setIsLiked(!isLiked)
		post.isLiked = !post.isLiked
	}

	const changeSaveStatus = () => {
		setIsSaved(!isSaved)
		post.isLiked = !post.isLiked
	}

	useEffect(() => {
		const getPost = async postId => {}
		// TODO: Get post
		getPost()

		return () => {
			// TODO: Update post
		}
	}, [])

	return (
		<Authorized>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton onClick={() => history.goBack()}>
							<IonIcon icon={chevronBackOutline}></IonIcon>
						</IonButton>
					</IonButtons>
					<IonTitle>Wear It Tomorrow</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonGrid className="ion-height ion-no-padding ion-no-margin">
				<IonRow className="ion-height">
					<IonCol>
						<img src={post.photoUrl} alt="" height={'70%'} />
						<IonToolbar color={'transparent'}>
							<IonButtons slot="start">
								<IonButton color={'danger'} onClick={changeLikeStatus}>
									<IonIcon icon={isLiked ? heart : heartOutline}></IonIcon>
								</IonButton>
								<IonButton>
									<IonIcon icon={shareSocialOutline}></IonIcon>
								</IonButton>
							</IonButtons>
							<IonButtons slot="end">
								<IonButton onClick={changeSaveStatus}>
									<IonIcon icon={isSaved ? bookmark : bookmarkOutline}></IonIcon>
								</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonCol>
				</IonRow>
			</IonGrid>
		</Authorized>
	)
}

export default Post
