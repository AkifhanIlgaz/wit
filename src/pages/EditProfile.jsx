import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonInput, IonRow, IonToolbar } from '@ionic/react'
import { pencilOutline } from 'ionicons/icons'
import { useRef } from 'react'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import Firebase from '../api/firebase/firebase'
import userState from '../atoms/user'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const EditProfile = () => {
	const uploadPhoto = useRef()
	const [user, setUser] = useRecoilState(userState)
	const firebase = new Firebase()
	const history = useHistory()

	const handleUploadPhoto = async event => {
		const file = event.target.files[0]
		try {
			const url = firebase.uploadFile(user.uid, file)
			setUser({ ...user, photoUrl: url })
			console.log(url)
		} catch (error) {
			console.log(error)
		}
	}

	const click = () => {
		uploadPhoto.current.click()
	}

	const goUsersProfile = () => {
		history.push(`/user/${user.uid}`)
	}

	const updateProfile = () => {
		goUsersProfile()
		console.log(user)
	}

	return (
		<Authorized>
			<IonToolbar color={'transparent'} className="ion-margin-bottom">
				<IonButtons slot="start" className="ion-padding-start">
					<IonButton onClick={goUsersProfile}>Cancel</IonButton>
				</IonButtons>
				<IonButtons slot="end" className="ion-padding-end">
					<IonButton
						onClick={() => {
							updateProfile()
						}}
					>
						Save
					</IonButton>
				</IonButtons>
			</IonToolbar>
			<IonGrid>
				<IonCard className="ion-transparent">
					<div
						className="ion-text-center ion-margin-bottom"
						style={{
							position: 'relative'
						}}
					>
						<img src={user.photoUrl ? user.photoUrl : defaultProfilePhoto} alt="" style={{ position: 'relative', borderRadius: '50%', width: '50%', height: '50%' }} />
						<IonFab slot="fixed" horizontal="right" vertical="bottom">
							<IonFabButton
								size="small"
								color={'tertiary'}
								style={{
									zIndex: '2',
									position: 'absolute',
									right: '2ı2%',
									bottom: '1%',
									margin: 'auto'
								}}
								onClick={click}
							>
								<IonIcon icon={pencilOutline}></IonIcon>
								<div hidden>
									<input type="file" onChange={handleUploadPhoto} ref={uploadPhoto} />
								</div>
							</IonFabButton>
						</IonFab>
					</div>

					<IonCardContent className="card-content">
						<IonRow className="ion-align-items-center ion-justify-content-center">
							<IonCol className="ion-no-padding">
								<IonInput
									label="Username"
									type="text"
									placeholder={user.displayName}
									clearOnEdit
									labelPlacement="stacked"
									style={{
										borderBottom: '1px solid black'
									}}
									onIonInput={e => {
										setUser({ ...user, displayName: e.detail.value })
										console.log(e.detail.value)
									}}
								></IonInput>
							</IonCol>
						</IonRow>
					</IonCardContent>
				</IonCard>
			</IonGrid>
		</Authorized>
	)
}

export default EditProfile
