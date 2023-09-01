import { IonButton } from '@ionic/react'
import { Fragment, useState } from 'react'
import formatCount from '../../api/numberFormat'
import profilePhoto1 from '../../images/defaultPostPhoto.jpg'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'
import profilePhoto2 from '../../images/defaultSavedPhoto.jpg'
import UserList from '../user/UserList'

const AnalyticsBox = ({ boxInfo }) => {
	const [isOpen, setIsOpen] = useState(false)

	const mock = [
		{ displayName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ displayName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ displayName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true }
	]

	return (
		<Fragment>
			<IonButton color={'transparent'} onClick={boxInfo.title !== 'Posts' && (() => setIsOpen(true))} className="ion-no-padding ion-no-margin">
				<span className="box ion-padding">
					<span className="count">{formatCount(boxInfo.count)}</span>
					<span className="title">{boxInfo.title}</span>
				</span>
			</IonButton>
			<UserList isOpen={isOpen} setIsOpen={setIsOpen} users={mock}></UserList>
		</Fragment>
	)
}

export default AnalyticsBox
