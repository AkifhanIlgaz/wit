import { IonCol, IonRow } from '@ionic/react'
import AnalyticsBox from './AnalyticsBox'

const ProfileAnalytics = ({ analytics }) => {
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
				<AnalyticsBox boxInfo={analytics.followers} />
				<AnalyticsBox boxInfo={analytics.following} />
			</IonCol>
		</IonRow>
	)
}

export default ProfileAnalytics
