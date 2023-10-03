import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import outfitState from '../../atoms/outfit'
import defaultPostPhoto from '../../images/defaultPostPhoto.jpg'
import OutfitLinkDot from './OutfitLinkDot'

// TODO: Add links props
const Outfit = () => {
	const history = useHistory()
	const [outfit, setOutfit] = useRecoilState(outfitState)

	return (
		<IonPage>
			<IonContent scrollY={false}>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonButton onClick={() => history.goBack()}>
								<IonIcon icon={chevronBackOutline} color="dark"></IonIcon>
							</IonButton>
						</IonButtons>
						<IonTitle>Wear It Tomorrow</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div
					style={{
						position: 'relative'
					}}
				>
					<img
						src={outfit.photoUrl || defaultPostPhoto}
						style={{
							width: '100vw',
							height: '88.57vh'
						}}
					/>

					{outfit.links && outfit.links.map((link, index) => <OutfitLinkDot key={index} link={link} />)}
					{links.map((link, index) => (
						<OutfitLinkDot key={index} link={link} />
					))}
				</div>
			</IonContent>
		</IonPage>
	)
}

export default Outfit
