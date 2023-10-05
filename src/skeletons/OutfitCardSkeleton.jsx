import { IonCard, IonCol, IonRow, IonSkeletonText } from '@ionic/react'

const OutfitCardSkeleton = () => {
	return (
		<IonRow className="ion-margin">
			<IonCol
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				pull=".2"
			>
				<IonCard
					className="ion-no-margin post-card"
					style={{
						width: '45vw',
						height: '21vh'
					}}
				>
					<IonSkeletonText
						className="ion-no-margin"
						animated
						style={{
							height: '100%'
						}}
					></IonSkeletonText>
				</IonCard>
			</IonCol>

			<IonCol
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				push=".2"
			>
				<IonCard
					className="ion-no-margin post-card"
					style={{
						width: '45vw',
						height: '21vh'
					}}
				>
					<IonSkeletonText
						className="ion-no-margin"
						animated
						style={{
							height: '100%'
						}}
					></IonSkeletonText>
				</IonCard>
			</IonCol>
		</IonRow>
	)
}

export default OutfitCardSkeleton
