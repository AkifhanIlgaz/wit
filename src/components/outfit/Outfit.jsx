import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import outfitState from '../../atoms/outfit'
import defaultPostPhoto from '../../images/defaultPostPhoto.jpg'
import Authorized from '../../layouts/Authorized'
import OutfitLinkDot from './OutfitLinkDot'

// TODO: Add links props
const Outfit = () => {
	const history = useHistory()
	const [outfit, setOutfit] = useRecoilState(outfitState)
	// TODO: Show links

	const links = [
		{
			href: 'https://www.topcoder.com/thrive/articles/fetch-api-javascript-how-to-make-get-and-post-requests',
			left: '51.84615384615385%',
			top: '43.78672985781991%',
			title: 'Logo'
		}
	]

	// useEffect(() => {
	// 	return () => {
	// 		setOutfit({})
	// 	}
	// }, [])

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
					src={outfit.photoUrl || defaultPostPhoto}
					style={{
						width: '100vw',
						height: '100vh'
					}}
				/>

				{outfit.links && outfit.links.map((link, index) => <OutfitLinkDot key={index} link={link} />)}
			</div>
		</Authorized>
	)
}

export default Outfit
