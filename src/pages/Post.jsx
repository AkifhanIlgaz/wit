import { Share } from '@capacitor/share'
import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { bookmark, bookmarkOutline, chevronBackOutline, heart, heartOutline, shareSocialOutline } from 'ionicons/icons'
import { Fragment, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getPostById } from '../api/mockUsers'
import formatCount from '../api/numberFormat'
import UserList from '../components/user/UserList'
import profilePhoto1 from '../images/defaultPostPhoto.jpg'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import profilePhoto2 from '../images/defaultSavedPhoto.jpg'
import Authorized from '../layouts/Authorized'
const Post = () => {
	const { postId } = useParams()
	const [post, setPost] = useState()
	const history = useHistory()
	const [isOpen, setIsOpen] = useState(false)

	const mock = [
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

		console.log(isOpen)
		getPost()
	}, [isOpen])

	return (
		<Authorized>
			{post && (
				<Fragment>
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
											<IonIcon icon={post.isLiked ? heart : heartOutline}></IonIcon>
										</IonButton>
										<IonButton onClick={sharePostUrl}>
											<IonIcon icon={shareSocialOutline}></IonIcon>
										</IonButton>
									</IonButtons>
									<IonButtons slot="end">
										<IonButton onClick={changeSaveStatus}>
											<IonIcon icon={post.isSaved ? bookmark : bookmarkOutline}></IonIcon>
										</IonButton>
									</IonButtons>
								</IonToolbar>
								<IonButton
									color={'transparent'}
									style={{
										color: '#000',
										marginTop: '0',
										fontWeight: '600',
										fontFamily: ` -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;`
									}}
									size="small"
									onClick={() => setIsOpen(true)}
								>
									<span>{formatCount(post.likeCount)} Likes</span>
									<UserList isOpen={isOpen} setIsOpen={setIsOpen} users={mock}></UserList>
								</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</Fragment>
			)}
		</Authorized>
	)
}

export default Post
