import { IonCard, IonCol, IonGrid, IonRow, IonSkeletonText } from '@ionic/react'
import PostHeaderSkeleton from './PostHeaderSkeleton'

const PostCardSkeleton = () => {
	return (
		<IonGrid className="ion-no-padding ">
			<IonCard>
				<PostHeaderSkeleton />

				<IonRow className="ion-justify-content-center ">
					<IonCol
						className="ion-no-padding"
						style={{
							width: '90vw',
							height: '40vh'
						}}
					>
						<IonSkeletonText
							animated
							style={{
								width: '100%',
								height: '100%'
							}}
						></IonSkeletonText>
					</IonCol>
				</IonRow>
			</IonCard>
		</IonGrid>
	)
}

export default PostCardSkeleton
