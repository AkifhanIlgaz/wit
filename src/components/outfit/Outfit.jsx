import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router'
import { useRecoilState, useRecoilValue } from 'recoil'
import Firebase from '../../api/firebase/firebase'
import { baseUrl, updateLink } from '../../api/wit-api/endPoints'
import outfitState from '../../atoms/outfit'
import userState from '../../atoms/user'
import defaultPostPhoto from '../../images/defaultPostPhoto.jpg'
import EditableOutfitLinkDot from './EditableOutfitLinkDot'
import OutfitLinkDot from './OutfitLinkDot'

// TODO: Add links props
const Outfit = () => {
	const history = useHistory()
	const [outfit, setOutfit] = useRecoilState(outfitState)
	const user = useRecoilValue(userState)
	const firebase = new Firebase()
	const [currentUser, loading] = useAuthState(firebase.auth)
	// Remove link && Update link

	/*
	TODO: Make an API call to backend if success	
	TODO: Then, update currentOutfit recoil state
	*/

	const removeOutfitLink = async index => {
		const idToken = await currentUser.getIdToken(true)

		const link = outfit.links[index]

		const res = await fetch(`${baseUrl}${updateLink}?` + new URLSearchParams({ outfitId: outfit.id }), {
			method: 'DELETE',
			headers: {
				Authorization: idToken,
				ContentType: 'application/json'
			},
			body: JSON.stringify(link)
		})

		if (res.ok) {
			const copyLinks = [...outfit.links]
			copyLinks.splice(index, 1)
			setOutfit({ ...outfit, links: copyLinks })
		}
	}

	useEffect(() => {
		if (loading) return
	}, [])

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

					{outfit.uid === user.uid ? outfit.links && outfit.links.map((link, index) => <EditableOutfitLinkDot key={index} link={link} removeLink={() => removeOutfitLink(index)} />) : outfit.links && outfit.links.map((link, index) => <OutfitLinkDot key={index} link={link} />)}
				</div>
			</IonContent>
		</IonPage>
	)
}

export default Outfit
