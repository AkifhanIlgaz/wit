import { IonCol, IonGrid, IonRow } from '@ionic/react'

const Posts = ({ photoUrl }) => {
	return (
		<IonGrid className="ion-no-padding">
			<IonRow className="ion-justify-content-center ion-align-items-center">
				<IonCol size="3.95" pull="0.075">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
				<IonCol size="3.95">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
				<IonCol size="3.95" push="0.075">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
			</IonRow>
			<IonRow className="ion-justify-content-center ion-align-items-center">
				<IonCol size="3.95" pull="0.075">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
				<IonCol size="3.95">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
				<IonCol size="3.95" push="0.075">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
			</IonRow>
			<IonRow className="ion-justify-content-center ion-align-items-center">
				<IonCol size="3.95" pull="0.075">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
				<IonCol size="3.95">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
				<IonCol size="3.95" push="0.075">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
			</IonRow>
			<IonRow className="ion-justify-content-center ion-align-items-center">
				<IonCol size="3.95" pull="0.075">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
				<IonCol size="3.95">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
				<IonCol size="3.95" push="0.075">
					<img src={photoUrl} alt="" width={128} height={128} />
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}

export default Posts
