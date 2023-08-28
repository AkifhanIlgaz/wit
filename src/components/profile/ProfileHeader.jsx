import { IonCol, IonRow } from '@ionic/react'
import DefaultButton from '../buttons/DefaultButton'
import FollowButton from '../buttons/FollowButton'
import FollowingButton from '../buttons/FollowingButton'
import ProfilePhoto from './ProfilePhoto'

const ProfileHeader = ({ header }) => {
	return (
		<IonRow className="ion-align-items-center ion-justify-content-center ion-margin-top">
			<ProfilePhoto photoUrl={header.photoUrl} />
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
