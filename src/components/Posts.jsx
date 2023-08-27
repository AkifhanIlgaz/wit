import { IonCol, IonGrid, IonRow } from '@ionic/react'
import defaultPostPhoto from '../images/defaultPostPhoto.jpg'

const Posts = () => {
	return (
		<IonGrid className="ion-no-padding">
			<IonRow className="ion-justify-content-center ion-align-items-center">
				<IonCol size="3.95" pull="0.075">
					<img src={defaultPostPhoto} alt=""  />
				</IonCol>
				<IonCol size="3.95">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
				<IonCol size="3.95" push="0.075">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
			</IonRow>
			<IonRow className="ion-justify-content-center ion-align-items-center">
				<IonCol size="3.95" pull="0.075">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
				<IonCol size="3.95">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
				<IonCol size="3.95" push="0.075">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
			</IonRow>
			<IonRow className="ion-justify-content-center ion-align-items-center">
				<IonCol size="3.95" pull="0.075">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
				<IonCol size="3.95">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
				<IonCol size="3.95" push="0.075">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
			</IonRow>
			<IonRow className="ion-justify-content-center ion-align-items-center">
				<IonCol size="3.95" pull="0.075">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
				<IonCol size="3.95">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
				<IonCol size="3.95" push="0.075">
					<img src={defaultPostPhoto} alt="" />
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}

export default Posts
