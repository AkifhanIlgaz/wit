import { IonButton, IonContent, IonList, IonModal } from '@ionic/react'
import { Fragment, useState } from 'react'
import formatCount from '../../api/numberFormat'
import profilePhoto1 from '../../images/defaultPostPhoto.jpg'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'
import profilePhoto2 from '../../images/defaultSavedPhoto.jpg'
import ModalHeader from '../helper/ModalHeader'
import UserListItem from '../user/UserListItem'

const AnalyticsBox = ({ boxInfo }) => {
	const [isOpen, setIsOpen] = useState(false)

	const mock = [
		{ userName: 'Gaye Su Akyol', photoUrl: profilePhoto1, isFollowed: true },
		{ userName: 'Farid Farjad', photoUrl: profilePhoto2, isFollowed: false },
		{ userName: 'Şevval Sam', photoUrl: defaultProfilePhoto, isFollowed: true }
	]

	return (
		<Fragment>
			<IonButton color={'transparent'} onClick={boxInfo.title !== 'Posts' && (() => setIsOpen(true))} className="ion-no-padding ion-no-margin">
				<span className="box ion-padding">
					<span className="count">{formatCount(boxInfo.count)}</span>
					<span className="title">{boxInfo.title}</span>
				</span>
			</IonButton>
			<IonModal isOpen={isOpen}>
				<ModalHeader setIsOpen={setIsOpen} />
				<IonContent>
					<IonList className="ion-align-items" lines="full">
						{mock.map((userInfo, i) => {
							return <UserListItem user={userInfo} key={i} />
						})}
					</IonList>
				</IonContent>
			</IonModal>
		</Fragment>
	)
}

export default AnalyticsBox
