import { IonCol, IonGrid, IonRow } from '@ionic/react'
import { useHistory } from 'react-router'

const splitIntoChunks = (arr, chunkSize) => {
	const chunks = []
	for (let i = 0; i < arr.length; i += chunkSize) {
		chunks.push(arr.slice(i, i + chunkSize))
	}
	return chunks
}

const Posts = ({ posts }) => {
	const postChunks = splitIntoChunks(posts, 3)
	const history = useHistory()
	const pageWidth = document.body.clientWidth

	return (
		<>
			<IonGrid className="ion-no-padding post-grid">
				{postChunks.map((chunk, i) => {
					return (
						<IonRow key={i} className="ion-justify-content-center">
							<IonCol>
								{chunk[0] && (
									<img
										src={chunk[0].photoUrl}
										alt=""
										height={pageWidth / 3}
										width={pageWidth / 3}
										onClick={() => {
											history.push(`/posts/${chunk[0].postId}`)
										}}
									/>
								)}
							</IonCol>
							<IonCol>
								{chunk[1] && (
									<img
										src={chunk[1].photoUrl}
										alt=""
										height={pageWidth / 3}
										width={pageWidth / 3}
										onClick={() => {
											history.push(`/posts/${chunk[1].postId}`)
										}}
									/>
								)}
							</IonCol>
							<IonCol>
								{chunk[2] && (
									<img
										src={chunk[2].photoUrl}
										alt=""
										height={pageWidth / 3}
										width={pageWidth / 3}
										onClick={() => {
											history.push(`/posts/${chunk[2].postId}`)
										}}
									/>
								)}
							</IonCol>
						</IonRow>
					)
				})}
			</IonGrid>
		</>
	)
}

export default Posts
