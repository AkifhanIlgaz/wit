import { IonCol, IonGrid, IonModal, IonRow } from '@ionic/react'
import { useState } from 'react'
import Post from './Post'

const splitIntoChunks = (arr, chunkSize) => {
	const chunks = []
	for (let i = 0; i < arr.length; i += chunkSize) {
		chunks.push(arr.slice(i, i + chunkSize))
	}
	return chunks
}

const Posts = ({ posts }) => {
	const postChunks = splitIntoChunks(posts, 3)
	const [isOpen, setIsOpen] = useState(false)
	const [clickedPost, setClickedPost] = useState()
	const pageWidth = document.body.clientWidth

	return (
		<>
			<IonGrid className="ion-no-padding post-grid">
				{postChunks.map((chunk, i) => {
					return (
						<IonRow key={i} className="ion-justify-content-center">
							<IonCol pull="0.075">
								{chunk[0] && (
									<img
										src={chunk[0].photoUrl}
										alt=""
										height={pageWidth / 3}
										width={pageWidth / 3}
										onClick={() => {
											setClickedPost(chunk[0])
											setIsOpen(true)
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
											setClickedPost(chunk[1])
											setIsOpen(true)
										}}
									/>
								)}
							</IonCol>
							<IonCol push="0.075">
								{chunk[2] && (
									<img
										src={chunk[2].photoUrl}
										alt=""
										height={pageWidth / 3}
										width={pageWidth / 3}
										onClick={() => {
											setClickedPost(chunk[2])
											setIsOpen(true)
										}}
									/>
								)}
							</IonCol>
						</IonRow>
					)
				})}
			</IonGrid>

			<IonModal isOpen={isOpen}>
				<Post setIsOpen={setIsOpen} post={clickedPost} />
			</IonModal>
		</>
	)
}

export default Posts
