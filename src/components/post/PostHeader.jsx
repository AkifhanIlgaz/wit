import { IonAvatar, IonCol } from '@ionic/react'
import { Fragment } from 'react'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'
import FollowButton from '../buttons/FollowButton'

const PostHeader = ({ postInfo }) => {
	return (
		<Fragment>
			<IonCol size="3">
				<IonAvatar>
					<img src={postInfo.profilePhoto || defaultProfilePhoto} alt="User Profile Photo" />
				</IonAvatar>
			</IonCol>
			<IonCol
				className="ion-no-padding"
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
				pull=".6"
			>
				<span
					style={{
						color: '#262626',
						fontSize: '14px',
						fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
						fontWeight: '600'
					}}
				>
					{postInfo.displayName}
				</span>

				<FollowButton isFollowed={postInfo.isFollowed}></FollowButton>
			</IonCol>
		</Fragment>
	)
}

export default PostHeader
