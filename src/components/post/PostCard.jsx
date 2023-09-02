import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from '@ionic/react'
import PostHeader from './PostHeader'
import PostToolbar from './PostToolbar'

const PostCard = () => {
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
	const x = {
		displayName: 'Gaye Su Akyol',
		username: 'gayesuakyol',

		isFollowed: false,
		isSendMessageDisabled: false,
		followerCount: 12567,
		followingCount: 8861,
		posts: [
			{
				postId: '64edcf7dfc13ae35b0ad21eb',
				likeCount: 10564,
				isLiked: true,
				isSaved: true,
				createdAt: '7/18/2023',
				photoUrl: 'http://dummyimage.com/208x100.png/dddddd/000000'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ec',
				likeCount: 732,
				isLiked: false,
				isSaved: false,
				createdAt: '10/7/2022',
				photoUrl: 'http://dummyimage.com/217x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ed',
				likeCount: 406,
				isLiked: true,
				isSaved: false,
				createdAt: '6/12/2023',
				photoUrl: 'http://dummyimage.com/184x100.png/dddddd/000000'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ee',
				likeCount: 958,
				isLiked: true,
				isSaved: false,
				createdAt: '5/27/2023',
				photoUrl: 'http://dummyimage.com/123x100.png/cc0000/ffffff'
			}
		],
		saved: [
			{
				postId: '64edcf7dfc13ae35b0ad21df',
				likeCount: 686,
				isLiked: false,
				isSaved: true,
				createdAt: '7/22/2023',
				photoUrl: 'http://dummyimage.com/158x100.png/5fa2dd/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e0',
				likeCount: 819,
				isLiked: true,
				isSaved: true,
				createdAt: '8/21/2023',
				photoUrl: 'http://dummyimage.com/157x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e1',
				likeCount: 116,
				isLiked: false,
				isSaved: false,
				createdAt: '4/11/2023',
				photoUrl: 'http://dummyimage.com/197x100.png/ff4444/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e2',
				likeCount: 596,
				isLiked: false,
				isSaved: true,
				createdAt: '1/9/2023',
				photoUrl: 'http://dummyimage.com/210x100.png/5fa2dd/ffffff'
			}
		]
	}

	return (
		<IonGrid className="ion-no-padding ">
			<IonCard>
				<IonRow className="ion-align-items-center ion-padding">
					<PostHeader postInfo={postInfo} />
				</IonRow>

				<IonRow className="ion-justify-content-center ">
					<IonCol
						className="ion-no-padding"
						style={{
							width: '90vw',
							height: '40vh'
						}}
					>
						<img src={postInfo.photoUrl} alt="" height={'100%'} width={'100%'} />
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
