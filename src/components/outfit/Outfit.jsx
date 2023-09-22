import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import defaultPostPhoto from '../../images/defaultPostPhoto.jpg'
import Authorized from '../../layouts/Authorized'
import OutfitLinkDot from './OutfitLinkDot'

// TODO: Add links props
const Outfit = ({ photoUrl }) => {
	const history = useHistory()
	// TODO: Show links

	const links = [
		{
			href: 'https://www.topcoder.com/thrive/articles/fetch-api-javascript-how-to-make-get-and-post-requests',
			left: '51.84615384615385%',
			top: '43.78672985781991%',
			title: 'Logo'
		}
	]

	return (
		<Authorized>
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
					src={photoUrl || defaultPostPhoto}
					style={{
						width: '100vw',
						height: '100vh'
					}}
				/>

				{links.map((link, index) => (
					<OutfitLinkDot key={index} link={link} />
				))}
			</div>
		</Authorized>
	)
}

export default Outfit
