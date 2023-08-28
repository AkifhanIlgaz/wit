import { IonAvatar, IonItem, IonLabel } from '@ionic/react'
import FollowButton from '../buttons/FollowButton'
import FollowingButton from '../buttons/FollowingButton'

const UserListItem = ({ user }) => {
	return (
		<IonItem>
			<IonAvatar slot="start">
				<img src={user.photoUrl} alt="" />
			</IonAvatar>
			<IonLabel>{user.userName}</IonLabel>
			{user.isFollowed ? <FollowingButton /> : <FollowButton />}
		</IonItem>
	)
}

export default UserListItem
