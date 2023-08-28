import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { Fragment, useState } from 'react'
import defaultProfilePhoto from '../../images/defaultProfilePhoto.jpg'

const AnalyticsBox = ({ boxInfo }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Fragment>
			<IonButton color={'transparent'} onClick={() => setIsOpen(true)}>
				<span className="box ion-padding">
					<span className="count">{boxInfo.count}</span>
					<span className="title">{boxInfo.title}</span>
				</span>
			</IonButton>
			<IonModal isOpen={isOpen}>
				<IonHeader
					style={{
						marginBottom: '.3em'
					}}
				>
					<IonToolbar>
						<IonButtons slot="start">
							<IonButton onClick={() => setIsOpen(false)}>
								<IonIcon icon={chevronBackOutline}></IonIcon>
							</IonButton>
						</IonButtons>
						<IonTitle>Wear It Tomorrow</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList className="ion-align-items" lines="full">
						<IonItem>
							<IonAvatar slot="start">
								<img src={defaultProfilePhoto} alt="" />
							</IonAvatar>
							<IonLabel>Gaye Su Akyol</IonLabel>
							<IonButton slot="end">Follow</IonButton>
						</IonItem>
						<IonItem>
							<IonAvatar slot="start">
								<img src={defaultProfilePhoto} alt="" />
							</IonAvatar>
							<IonLabel>Gaye Su Akyol</IonLabel>
							<IonButton slot="end">Follow</IonButton>
						</IonItem>
						<IonItem>
							<IonAvatar slot="start">
								<img src={defaultProfilePhoto} alt="" />
							</IonAvatar>
							<IonLabel>Gaye Su Akyol</IonLabel>
							<IonButton slot="end">Follow</IonButton>
						</IonItem>
					</IonList>
				</IonContent>
			</IonModal>
		</Fragment>
	)
}

export default AnalyticsBox
