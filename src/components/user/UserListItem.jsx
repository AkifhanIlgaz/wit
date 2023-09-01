import { IonAvatar, IonItem, IonLabel } from '@ionic/react'
import FollowButton from '../buttons/FollowButton'

const UserListItem = ({ user }) => {
	return (
		<IonItem>
			<IonAvatar slot="start">
				<img src={user.photoUrl} alt="" />
			</IonAvatar>
			<IonLabel>{user.displayName}</IonLabel>
			<FollowButton isFollowed={user.isFollowed} />
		</IonItem>
	)
}

export default UserListItem
