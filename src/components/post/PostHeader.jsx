import { IonAvatar, IonCol, IonRow } from '@ionic/react'
import { Fragment } from 'react'
import { useHistory } from 'react-router'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'

const PostHeader = ({ postInfo }) => {
	const history = useHistory()

	const goUsersProfile = () => history.push(`/user/${postInfo.uid}`)

	return (
		<Fragment>
			<IonRow className="ion-align-items-center ion-padding ion-justify-content-space-between">
				<IonCol size="3">
					<IonAvatar onClick={goUsersProfile}>
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
						onClick={goUsersProfile}
					>
						{postInfo.displayName}
					</span>
				</IonCol>
			</IonRow>
		</Fragment>
	)
}

export default PostHeader
