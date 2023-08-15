import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonRow } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import NotAuthorized from '../layouts/NotAuthorized'

export const SignUp = () => {
	const history = useHistory()

	return (
		<NotAuthorized>
			<IonCardContent className="card-content">
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="E-Mail" type="email" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input"></IonInput>
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding ion-padding-bottom">
						<IonInput label={'Password'} type="password" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input" />
					</IonCol>
				</IonRow>
				<IonButton className="ion-margin-top ion-margin-bottom " type="submit" expand="block" color="dark">
					<span>{'Sign Up'}</span>
					<IonIcon icon={personCircleOutline} slot="end"></IonIcon>
				</IonButton>

				<div className="ion-text-center">
					<a onClick={() => history.push('/signin')} style={{ textDecoration: 'none', color: 'grey', fontSize: '12px' }}>
						Already have an account ?
					</a>
				</div>
			</IonCardContent>
		</NotAuthorized>
	)
}

export default SignUp
