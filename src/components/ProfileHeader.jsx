import { IonCol, IonRow } from '@ionic/react'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'
import DefaultButton from './buttons/DefaultButton'
import FollowButton from './buttons/FollowButton'
import FollowingButton from './buttons/FollowingButton'

const ProfileHeader = ({ header }) => {
	return (
		<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
			<IonCol
				push=".4"
				size="4"
				style={{
					paddingBottom: '0px',
					paddingTop: '0px'
				}}
			>
				<img src={header.photoUrl || defaultProfilePhoto} alt="User Profile Photo" className="profile-photo" />
			</IonCol>
			<IonCol pull=".4" size="7">
				<span className="username ion-no-margin">{header.userName}</span>
				<div
					style={{
						paddingTop: '5px'
					}}
				>
					{header.isFollowed ? <FollowingButton /> : <FollowButton />}

					{!header.isSendMessageDisabled && <DefaultButton text={'Send Message'} />}
				</div>
			</IonCol>
		</IonRow>
	)
}

export default ProfileHeader
