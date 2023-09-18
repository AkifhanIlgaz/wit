import { IonCol, IonRow } from '@ionic/react'
import { useState } from 'react'
import AnalyticsBox from './AnalyticsBox'
import PostBox from './PostBox'

const ProfileAnalytics = ({ analytics, postCount }) => {
	const [isFollowersOpen, setIsFollowersOpen] = useState(false)
	const [isFollowingsOpen, setIsFollowingsOpen] = useState(false)

	// TODO: Get post count
	// TODO: Get followers
	// TODO: Get followings

	return (
		<IonRow className="ion-align-items-center ion-justify-content-space-around ion-margin-top  " style={{ borderTop: '1px solid rgb(219,219,219)', borderBottom: '1px solid rgb(219,219,219)' }}>
			<IonCol
				className="ion-no-padding"
				style={{
					display: 'flex',
					justifyContent: 'space-around'
				}}
			>
				<PostBox count={4} />
				<AnalyticsBox boxInfo={analytics.followers} isOpen={isFollowersOpen} setIsOpen={setIsFollowersOpen} />
				<AnalyticsBox boxInfo={analytics.followings} isOpen={isFollowingsOpen} setIsOpen={setIsFollowingsOpen} />
			</IonCol>
		</IonRow>
	)
}

export default ProfileAnalytics
