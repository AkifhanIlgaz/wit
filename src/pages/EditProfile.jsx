import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonInput, IonRow, IonToolbar } from '@ionic/react'
import { pencilOutline } from 'ionicons/icons'
import { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import Firebase, { StorageBase } from '../api/firebase/firebase'
import { baseUrl, generateUploadUrl, updateProfilePhoto } from '../api/wit-api/endPoints'
import userState from '../atoms/user'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import Authorized from '../layouts/Authorized'

const EditProfile = () => {
	const uploadPhoto = useRef()
	const [user, setUser] = useRecoilState(userState)
	const firebase = new Firebase()
	const history = useHistory()
	const [currentUser, loading] = useAuthState(firebase.auth)
	const [profilePhoto, setProfilePhoto] = useState()
	const [displayName, setDisplayName] = useState('')

	const handleUploadPhoto = async event => {
		const file = event.target.files[0]

		const idToken = await currentUser.getIdToken(true)

		let uploadData = await fetch(`${baseUrl}${generateUploadUrl}`, {
			headers: {
				Authorization: idToken,
				fileType: file.type,
				type: 'profilePhoto'
			}
		}).then(res => res.json())

		const res = await fetch(uploadData.uploadUrl, {
			method: 'PUT',
			body: file,
			headers: {
				'Content-Type': file.type
			}
		})

		if (res.ok) {
			await fetch(`${baseUrl}${updateProfilePhoto}`, {
				method: 'PUT',
				headers: {
					Authorization: idToken,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					photoUrl: uploadData.filePath
				})
			})
		}

		setUser({ ...user, photoUrl: `${StorageBase}/${uploadData.filePath}` })
	}

	const click = () => {
		uploadPhoto.current.click()
	}

	const goUsersProfile = () => {
		history.push(`/user/${user.uid}`)
	}

	const updateProfile = () => {
		// TODO: API call

		setUser({ ...user, displayName: displayName })
		goUsersProfile()
	}

	useEffect(() => {
		if (loading) return
	}, [loading])

	return (
		<Authorized>
			<IonToolbar color={'transparent'} className="ion-margin-bottom">
				<IonButtons slot="start" className="ion-padding-start">
					<IonButton
						onClick={() => {
							setDisplayName(null)
							goUsersProfile()
						}}
					>
						Cancel
					</IonButton>
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
									value={displayName || user.displayName}
									clearInput
									labelPlacement="stacked"
									style={{
										borderBottom: '1px solid black'
									}}
									onIonInput={e => {
										setDisplayName(e.detail.value)
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
