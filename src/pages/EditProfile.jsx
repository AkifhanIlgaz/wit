import { IonButton, IonButtons, IonFab, IonFabButton, IonIcon, IonToolbar } from '@ionic/react'
import { pencilOutline } from 'ionicons/icons'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import Firebase from '../api/firebase/firebase'
import userState from '../atoms/user'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const EditProfile = () => {
	const uploadPhoto = useRef()
	const user = useRecoilValue(userState)
	const firebase = new Firebase()

	const handleUploadPhoto = async event => {
		const file = event.target.files[0]
		try {
			const url = firebase.uploadFile(user.uid, file)
			console.log(url)
		} catch (error) {
			console.log(error)
		}
	}

	const click = () => {
		uploadPhoto.current.click()
	}

	return (
		<Authorized>
			<IonToolbar color={'transparent'} className='ion-margin-bottom'>
				<IonButtons slot="start" className="ion-padding-start">
					<IonButton>Cancel</IonButton>
				</IonButtons>
				<IonButtons slot="end" className="ion-padding-end">
					<IonButton>Save</IonButton>
				</IonButtons>
			</IonToolbar>
			<div
				className="ion-text-center ion-margin-bottom"
				style={{
					position: 'relative'
				}}
			>
				<img src={user.photoURL ? user.photoURL : defaultProfilePhoto} alt="" style={{ position: 'relative', borderRadius: '50%', width: '50%', height: '50%' }} />
				<IonFab slot="fixed" horizontal="right" vertical="bottom">
					<IonFabButton
						size="small"
						color={'tertiary'}
						style={{
							zIndex: '2',
							position: 'absolute',
							right: '22%',
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
		</Authorized>
	)
}

export default EditProfile
