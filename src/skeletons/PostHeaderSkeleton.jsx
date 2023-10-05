import { IonAvatar, IonCol, IonRow, IonSkeletonText } from '@ionic/react'
import { Fragment } from 'react'

const PostHeaderSkeleton = () => {
	return (
		<Fragment>
			<IonRow className="ion-align-items-center ion-padding ion-justify-content-space-between">
				<IonCol size="3">
					<IonAvatar>
						<IonSkeletonText animated></IonSkeletonText>
					</IonAvatar>
				</IonCol>
				<IonCol
					className="ion-no-padding"
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
					pull=".6"
				>
					<IonSkeletonText
						animated
						style={{
							width: '60%'
						}}
					></IonSkeletonText>
				</IonCol>
			</IonRow>
		</Fragment>
	)
}

export default PostHeaderSkeleton
