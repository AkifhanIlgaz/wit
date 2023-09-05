import { Share } from '@capacitor/share'
import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getPostById } from '../api/mockUsers'
import profilePhoto1 from '../images/defaultPostPhoto.jpg'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import profilePhoto2 from '../images/defaultSavedPhoto.jpg'
import Authorized from '../layouts/Authorized'
const Post = () => {
	const { postId } = useParams()
	const [post, setPost] = useState()
	const history = useHistory()

	const mock = [
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true },
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true },
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true },
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true },
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true },
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true },
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true }
	]

	const sharePostUrl = async () => {
		await Share.share({
			url: `https://wearittomorrow.com/posts/${post.postId}`
		})
	}

	const changeLikeStatus = () => {
		setPost({
			...post,
			isLiked: !post.isLiked
		})
	}

	const changeSaveStatus = () => {
		setPost({
			...post,
			isSaved: !post.isSaved
		})
	}

	useEffect(() => {
		const getPost = async () => {
			const currentPost = getPostById(postId)
			setPost(currentPost)
		}

		getPost()
	}, [])

	const modal = useRef(null)

	return (
		<Authorized>
			{post && (
				<Fragment>
					<IonHeader>
						<IonToolbar>
							<IonButtons slot="start">
								<IonButton onClick={() => history.goBack()}>
									<IonIcon icon={chevronBackOutline} color="dark"></IonIcon>
								</IonButton>
							</IonButtons>
							<IonTitle>Wear It Tomorrow</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid className="ion-height ion-no-padding ion-no-margin">
						<IonRow className="ion-height">
							<IonCol>
								<img src={post.photoUrl} alt="" height={'100%'} onDoubleClick={changeLikeStatus} />
							</IonCol>
						</IonRow>
					</IonGrid>
				</Fragment>
			)}
		</Authorized>
	)
}

export default Post
