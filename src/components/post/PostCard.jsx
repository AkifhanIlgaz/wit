import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from '@ionic/react'
import { useHistory } from 'react-router'
import PostHeader from './PostHeader'
import PostToolbar from './PostToolbar'

const PostCard = () => {
	const history = useHistory()

	const postInfo = {
		profilePhoto: 'http://dummyimage.com/277x226.png/ff4444/ffffff',
		displayName: 'Gaye Su Akyol',
		username: 'gayesuakyol',
		isFollowed: false,
		postId: '64edcf7dfc13ae35b0ad21eb',
		likeCount: 10564,
		isLiked: true,
		isSaved: true,
		createdAt: '7/18/2023',
		photoUrl: 'http://dummyimage.com/208x100.png/dddddd/000000'
	}

	return (
		<IonGrid className="ion-no-padding ">
			<IonCard>
				<PostHeader postInfo={postInfo} />

				<IonRow className="ion-justify-content-center ">
					<IonCol
						className="ion-no-padding"
						style={{
							width: '90vw',
							height: '40vh'
						}}
					>
						<img
							src={postInfo.photoUrl}
							alt=""
							height={'100%'}
							width={'100%'}
							onClick={() => {
								history.push(`/posts/${postInfo.postId}`)
							}}
						/>
					</IonCol>
				</IonRow>
				<IonRow
					className="ion-align-items-center ion-justify-content-center "
					style={{
						margin: '.4em 0'
					}}
				>
					<IonCol>
						<IonCardContent className="ion-no-padding">
							<PostToolbar />
						</IonCardContent>
					</IonCol>
				</IonRow>
			</IonCard>
		</IonGrid>
	)
}

export default PostCard
