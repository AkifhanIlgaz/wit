import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonRow } from '@ionic/react'
import { logoGoogle, logoTwitter, personCircleOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import NotAuthorized from '../layouts/NotAuthorized'

export const SignIn = () => {
	const history = useHistory()

	return (
		<NotAuthorized>
			<div className="ion-text-center">
				<IonButton color={'dark'}>
					<IonIcon icon={logoGoogle}></IonIcon>
				</IonButton>
				<IonButton color={'dark'}>
					<IonIcon icon={logoTwitter}></IonIcon>
				</IonButton>
			</div>

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
				<IonButton className="ion-margin-top ion-margin-bottom" type="submit" expand="block" color="dark">
					<span>{'Sign Up'}</span>
					<IonIcon icon={personCircleOutline} slot="end"></IonIcon>
				</IonButton>
				<IonRow>
					<IonCol>
						<a onClick={() => history.push('/signup')} className="ion-float-left" style={{ textDecoration: 'none', color: 'grey', fontSize: '12px' }}>
							Don't have an account ?
						</a>
					</IonCol>
					<IonCol>
						<a onClick={() => history.push('/forgot-password')} className="ion-float-right" style={{ textDecoration: 'none', color: 'grey', fontSize: '12px' }}>
							Forgot password ?
						</a>
					</IonCol>
				</IonRow>
			</IonCardContent>
		</NotAuthorized>
	)
}

export default SignIn
