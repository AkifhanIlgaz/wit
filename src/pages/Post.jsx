import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { bookmark, chevronBackOutline, heart, shareSocialOutline } from 'ionicons/icons'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { getPostById } from '../api/mockUsers'
import Authorized from '../layouts/Authorized'

const Post = () => {
	const { postId } = useParams()
	const post = getPostById(postId)
	const history = useHistory()

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
								<IonButton color={'danger'}>
									<IonIcon icon={heart}></IonIcon>
								</IonButton>
								<IonButton>
									<IonIcon icon={shareSocialOutline}></IonIcon>
								</IonButton>
							</IonButtons>
							<IonButtons slot="end">
								<IonButton>
									<IonIcon icon={bookmark}></IonIcon>
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
