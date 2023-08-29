import { IonCol, IonRow } from '@ionic/react'
import DefaultButton from '../buttons/DefaultButton'
import FollowButton from '../buttons/FollowButton'
import ProfilePhoto from './ProfilePhoto'

const ProfileHeader = ({ header }) => {
	return (
		<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
			<ProfilePhoto photoUrl={header.photoUrl} />
			<IonCol pull=".4" size="7">
				<span className="username ion-no-margin">{header.username}</span>
				<div
					style={{
						paddingTop: '5px'
					}}
				>
					<FollowButton isFollowed={header.isFollowed} />
					{!header.isSendMessageDisabled && <DefaultButton text={'Send Message'} />}
				</div>
			</IonCol>
		</IonRow>
	)
}

export default ProfileHeader
