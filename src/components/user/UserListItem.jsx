import { IonAvatar, IonItem, IonLabel } from '@ionic/react'
import FollowButton from '../buttons/FollowButton'

const UserListItem = ({ user }) => {
	return (
		<IonItem>
			<IonAvatar slot="start">
				<img src={user.photoUrl} alt="" />
			</IonAvatar>
			<IonLabel>{user.displayName}</IonLabel>
			<FollowButton isFollowed={user.isFollowed} uid={user.uid} />
		</IonItem>
	)
}

export default UserListItem
