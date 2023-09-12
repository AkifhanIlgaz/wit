import { IonAvatar, IonCol, IonRow } from '@ionic/react'
import { Fragment } from 'react'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'
import FollowButton from '../buttons/FollowButton'

const PostHeader = ({ postInfo }) => {
	return (
		<Fragment>
			<IonRow className="ion-align-items-center ion-padding ion-justify-content-space-between">
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
				</IonCol>
				<IonCol push=".7">
					<FollowButton isFollowed={postInfo.isFollowed} uid={'xQFQncknojU5vUnsmIl2bIevBdE2'}></FollowButton>
				</IonCol>
			</IonRow>
		</Fragment>
	)
}

export default PostHeader
