import { IonCol, IonRow } from '@ionic/react'
import { useState } from 'react'
import AnalyticsBox from './AnalyticsBox'

const ProfileAnalytics = ({ analytics }) => {
	const [isFollowersOpen, setIsFollowersOpen] = useState(false)
	const [isFollowingsOpen, setIsFollowingsOpen] = useState(false)

	return (
		<IonRow className="ion-align-items-center ion-justify-content-space-around ion-margin-top  " style={{ borderTop: '1px solid rgb(219,219,219)', borderBottom: '1px solid rgb(219,219,219)' }}>
			<IonCol
				size="12"
				className="ion-no-padding"
				style={{
					display: 'flex',
					justifyContent: 'space-around'
				}}
			>
				<AnalyticsBox boxInfo={analytics.posts} />
				<AnalyticsBox boxInfo={analytics.followers} isOpen={isFollowersOpen} setIsOpen={setIsFollowersOpen} />
				<AnalyticsBox boxInfo={analytics.followings} isOpen={isFollowingsOpen} setIsOpen={setIsFollowingsOpen} />
			</IonCol>
		</IonRow>
	)
}

export default ProfileAnalytics
