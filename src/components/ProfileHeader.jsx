import { IonButton, IonCol, IonRow } from '@ionic/react'
import defaultProfilePhoto from '../images/defaultProfilePhoto.jpg'

const ProfileHeader = ({ header }) => {
	return (
		<IonRow className="ion-align-items-center ion-justify-content-center">
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
				<span className="username ion-no-margin">{header.userName} </span>
				<div
					style={{
						paddingTop: '5px'
					}}
				>
					{header.isFollowed ? (
						<IonButton
							size="small"
							color={'primary'}
							className="button-text "
							style={{
								marginRight: '5px'
							}}
						>
							<span>Followed</span>
						</IonButton>
					) : (
						<IonButton
							size="small"
							color={'button-background'}
							className="button-text "
							style={{
								marginRight: '5px'
							}}
						>
							<span>Follow</span>
						</IonButton>
					)}

					{!header.isSendMessageDisabled && (
						<IonButton size="small" color={'button-background'} className="button-text">
							Send Message
						</IonButton>
					)}
				</div>
			</IonCol>
		</IonRow>
	)
}

export default ProfileHeader
