import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react'
import { useHistory } from 'react-router'

const splitIntoChunks = (arr, chunkSize) => {
	const chunks = []
	for (let i = 0; i < arr.length; i += chunkSize) {
		chunks.push(arr.slice(i, i + chunkSize))
	}
	return chunks
}

const Posts = ({ posts }) => {
	const postChunks = splitIntoChunks(posts, 2)
	const history = useHistory()
	const pageWidth = document.body.clientWidth
	console.log(postChunks)
	return (
		<>
			<IonGrid className="ion-no-padding post-grid">
				{postChunks.map((chunk, i) => {
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
											history.push(`/posts/${chunk[0].id}`)
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
												history.push(`/posts/${chunk[1].id}`)
											}}
										/>
									</IonCard>
								</IonCol>
							)}
						</IonRow>
					)
				})}
			</IonGrid>
		</>
	)
}

export default Posts
