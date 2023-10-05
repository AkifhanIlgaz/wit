import { IonCol, IonRow, IonSkeletonText } from '@ionic/react'
const ProfileHeaderSkeleton = () => {
	return (
		<>
			<IonRow
				className="ion-align-items-center ion-justify-content-center"
				style={{
					marginTop: '1%'
				}}
			>
				<IonCol
					style={{
						display: 'flex',
						justifyContent: 'center'
					}}
					size="4"
				>
					<IonSkeletonText
						animated
						style={{
							width: '30vw',
							height: '30vw',
							borderRadius: '50%'
						}}
					></IonSkeletonText>
				</IonCol>
			</IonRow>
			<IonRow className="ion-align-items-center ion-justify-content-center ion-margin">
				<IonCol
					style={{
						display: 'flex',
						justifyContent: 'center'
					}}
					size="4"
					className="count"
				>
					<IonSkeletonText animated style={{ width: '100%', height: '50%', lineHeight: '1rem' }}></IonSkeletonText>
				</IonCol>
			</IonRow>

			<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
				<IonCol
					style={{
						display: 'flex',
						justifyContent: 'center'
					}}
				></IonCol>
			</IonRow>
		</>
	)
}

export default ProfileHeaderSkeleton
