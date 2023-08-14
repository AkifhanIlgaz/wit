import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonRow } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons'
import NotAuthorized from '../layouts/NotAuthorized'

export const SignIn = () => {
	return (
		<NotAuthorized>
			<IonCardContent className="card-content">
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="E-Mail" type="email" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input"></IonInput>
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label={'Password'} type="password" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input" />
					</IonCol>
				</IonRow>
				<IonButton className="ion-margin-top " type="submit" expand="block" color="secondary">
					<span>{'Sign Up'}</span>
					<IonIcon icon={personCircleOutline} slot="end"></IonIcon>
				</IonButton>
				<IonRow className="ion-text-center">
					<IonCol>
						<a style={{ textDecoration: 'none', color: 'white', fontSize: '12px' }}>{'Already have an account?'}</a>
					</IonCol>
				</IonRow>
			</IonCardContent>
		</NotAuthorized>
	)
}

export default SignIn
