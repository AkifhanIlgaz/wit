import { IonCol } from '@ionic/react'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'

const ProfilePhoto = ({ photoUrl }) => {
	return (
		<IonCol
			push=".4"
			size="4"
			style={{
				paddingBottom: '0px',
				paddingTop: '0px'
			}}
		>
			<img src={photoUrl || defaultProfilePhoto} alt="User Profile Photo" className="profile-photo" />
		</IonCol>
	)
}

export default ProfilePhoto
