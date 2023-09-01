import { IonButton, IonContent, IonList, IonModal, IonSearchbar } from '@ionic/react'
import { Fragment } from 'react'
import formatCount from '../../api/numberFormat'
import profilePhoto1 from '../../images/defaultPostPhoto.jpg'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'
import profilePhoto2 from '../../images/defaultSavedPhoto.jpg'
import UserListItem from '../user/UserListItem'

const AnalyticsBox = ({ boxInfo, ref, id }) => {
	const mock = [
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true }
	]

	return (
		<Fragment>
			<IonButton color={'transparent'} id={id} className="ion-no-padding ion-no-margin">
				<span className="box ion-padding">
					<span className="count">{formatCount(boxInfo.count)}</span>
					<span className="title">{boxInfo.title}</span>
				</span>
			</IonButton>
			<IonModal ref={ref} trigger={id} initialBreakpoint={0.75} breakpoints={[0, 0.25, 0.5, 0.75]}>
				<IonContent className="ion-padding">
					<IonSearchbar animated placeholder="Search"></IonSearchbar>
					<IonList>
						{mock.map((user, i) => (
							<UserListItem key={i} user={user} />
						))}
					</IonList>
				</IonContent>
			</IonModal>
		</Fragment>
	)
}

export default AnalyticsBox
