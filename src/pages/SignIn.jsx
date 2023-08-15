import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonLabel, IonRow } from '@ionic/react'
import { logoGithub, logoGoogle, logoTwitter, personCircleOutline } from 'ionicons/icons'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import Firebase from '../api/firebase/firebase'
import userState from '../atoms/user'
import NotAuthorized from '../layouts/NotAuthorized'

export const SignIn = () => {
	const [phone, setPhone] = useState()
	const firebase = new Firebase()
	const history = useHistory()
	const [verificationId, setVerificationId] = useState()
	const [code, setCode] = useState()
	const [user, setUser] = useRecoilState(userState)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const signInWithEmail = async data => {
		try {
			const res = await firebase.signInWithEmail(data.email, data.password)
			if (res === false) {
				alert("User doesn't exist")
				history.push('/signup')
				return
			}
			setUser(res)
			console.log(res)
			history.push('/home')
		} catch (error) {
			alert(error.message)
		}
	}

	const signInWithProvider = async provider => {
		try {
			const res = await firebase.signInWithThirdPartyProvider(provider)
			setUser(res)
			console.log(res)
			history.push('/home')
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<NotAuthorized onSubmit={handleSubmit(signInWithEmail)}>
			<div className="ion-text-center">
				<IonButton color={'dark'} onClick={() => signInWithProvider(firebase.googleProvider)}>
					<IonIcon icon={logoGoogle}></IonIcon>
				</IonButton>
				<IonButton color={'dark'} onClick={() => signInWithProvider(firebase.twitterProvider)}>
					<IonIcon icon={logoTwitter}></IonIcon>
				</IonButton>
				<IonButton color={'dark'} onClick={() => signInWithProvider(firebase.githubProvider)}>
					<IonIcon icon={logoGithub}></IonIcon>
				</IonButton>
			</div>

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
					<IonCol className="ion-no-padding">
						<IonInput label={'Password'} type="password" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input" {...register('password', { required: true })} />
						{errors.password && (
							<IonLabel className="ion-margin-start ion-margin-top" color={'warning'}>
								Password is required !
							</IonLabel>
						)}
					</IonCol>
				</IonRow>

				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput
							onIonInput={e => {
								setPhone(e.detail.value)
							}}
							label={'Phone'}
							type="tel"
							labelPlacement="floating"
							className="ion-padding-start ion-padding-end ion-margin-top ion-input"
						/>
					</IonCol>
				</IonRow>
				<div id="recaptcha-container"></div>
				<IonButton
					onClick={async () => {
						const verId = await firebase.sendVerificationCode(phone)
						setVerificationId(verId)
					}}
				>
					Send code
				</IonButton>

				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput
							onIonInput={e => {
								setCode(e.detail.value)
							}}
							label={'Code'}
							type="number"
							labelPlacement="floating"
							className="ion-padding-start ion-padding-end ion-margin-top ion-input"
						/>
					</IonCol>
				</IonRow>
				<IonButton
					onClick={async () => {
						const res = await firebase.signUpWithPhone(verificationId, code)
						console.log(res)
					}}
				>
					Verify Code
				</IonButton>

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
