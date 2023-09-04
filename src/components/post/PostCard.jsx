import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from '@ionic/react'
import { useHistory } from 'react-router'
import PostHeader from './PostHeader'
import PostToolbar from './PostToolbar'

const PostCard = ({ postInfo }) => {
	const history = useHistory()

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
