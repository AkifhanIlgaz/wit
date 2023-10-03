import { IonCard, IonCol, IonGrid, IonInfiniteScroll, IonInfiniteScrollContent, IonRow } from '@ionic/react'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import Firebase from '../../api/firebase/firebase'
import { baseUrl, savedOutfits } from '../../api/wit-api/endPoints'
import outfitState from '../../atoms/outfit'

const splitIntoChunks = (arr, chunkSize) => {
	const chunks = []
	for (let i = 0; i < arr.length; i += chunkSize) {
		chunks.push(arr.slice(i, i + chunkSize))
	}
	return chunks
}

const Saved = ({ uid }) => {
	const history = useHistory()
	const [items, setItems] = useState([])
	const [currentOutfit, setCurrentOutfit] = useRecoilState(outfitState)
	const firebase = new Firebase()
	const [currentUser, loading] = useAuthState(firebase.auth)
	const getOutfits = async (last = '') => {
		const idToken = await currentUser.getIdToken(true)

		const res = await fetch(
			`${baseUrl}${savedOutfits}?` +
				new URLSearchParams({
					uid: uid,
					last: last
				}),
			{
				method: 'GET',
				headers: {
					Authorization: idToken
				}
			}
		)

		const newOutfits = await res.json()
		setItems([...items, ...newOutfits])
	}

	useEffect(() => {
		if (loading) return
		getOutfits()
	}, [loading])

	return (
		<IonGrid className="ion-no-padding post-grid">
			{splitIntoChunks(items, 2).map((chunk, i) => {
				return (
					<IonRow key={i} className="ion-margin">
						<IonCol
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
							pull=".2"
						>
							<IonCard
								className="ion-no-margin post-card"
								style={{
									width: '45vw',
									height: '21vh'
								}}
							>
								<img
									src={chunk[0].photoUrl}
									height={'100%'}
									onClick={() => {
										setCurrentOutfit(chunk[0])
										history.push(`/outfit/${chunk[0].id}`)
									}}
								/>
							</IonCard>
						</IonCol>

						{chunk[1] && (
							<IonCol
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
								push=".2"
							>
								<IonCard
									className="ion-no-margin post-card"
									style={{
										width: '45vw',
										height: '21vh'
									}}
								>
									<img
										src={chunk[1].photoUrl}
										height={'100%'}
										onClick={() => {
											setCurrentOutfit(chunk[1])
											history.push(`/outfit/${chunk[1].id}`)
										}}
									/>
								</IonCard>
							</IonCol>
						)}
					</IonRow>
				)
			})}
			<IonInfiniteScroll
				onIonInfinite={e => {
					getOutfits(items.at(-1).id).then(() => e.target.complete())
				}}
			>
				<IonInfiniteScrollContent></IonInfiniteScrollContent>
			</IonInfiniteScroll>
		</IonGrid>
	)
}

export default Saved
