import { IonButton, IonSkeletonText } from '@ionic/react'

const BoxSkeleton = ({ title }) => {
	return (
		<IonButton color={'transparent'} className="ion-no-padding ion-no-margin">
			<span className="box ion-padding">
				<IonSkeletonText animated style={{ width: '100%' }}></IonSkeletonText>
				<span className="title">{title}</span>
			</span>
		</IonButton>
	)
}

export default BoxSkeleton
