import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonLabel, IonRow } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Firebase from '../api/firebase/firebase'
import userState from '../atoms/user'
import NotAuthorized from '../layouts/NotAuthorized'

export const SignUp = () => {
	const history = useHistory()
	const [user, setUser] = useRecoilState(userState)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const signUp = async data => {
		try {
			const firebase = new Firebase()
			const res = await firebase.signUpWithEmail(data.email, data.password)
			console.log(res)
			if (res === false) {
				alert('User already exists')
				return
			}
			setUser(res)
			history.push('/home')
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<NotAuthorized onSubmit={handleSubmit(signUp)}>
			<IonCardContent className="card-content">
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="E-Mail" type="email" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input" {...register('email', { required: true })}></IonInput>
						{errors.email && (
							<IonLabel className="ion-margin-start ion-margin-top" color={'warning'}>
								E-mail is required !
							</IonLabel>
						)}
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding ion-padding-bottom">
						<IonInput label={'Password'} type="password" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input" {...register('password', { required: true })} />
						{errors.password && (
							<IonLabel className="ion-margin-start ion-margin-top" color={'warning'}>
								Password is required !
							</IonLabel>
						)}
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
