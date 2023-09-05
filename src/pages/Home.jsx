import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage, IonRefresher, IonRefresherContent, IonToolbar } from '@ionic/react'
import { refreshOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import LogoTitle from '../components/LogoTitle'
import PostCard from '../components/post/PostCard'

const Home = () => {
	const [posts, setPosts] = useState([])
	const [postChunkIndex, setPostChunkIndex] = useState(0)

	const getPosts = postChunkIndex => {
		const postInfo = {
			profilePhoto: 'http://dummyimage.com/277x226.png/ff4444/ffffff',
			displayName: `Gaye Su Akyol | Index ${postChunkIndex}`,
			username: 'gayesuakyol',
			isFollowed: false,
			postId: '64edcf7dfc13ae35b0ad21eb',
			likeCount: 10564,
			isLiked: true,
			isSaved: true,
			createdAt: '7/18/2023',
			photoUrl: 'http://dummyimage.com/208x100.png/dddddd/000000'
		}

		setTimeout(() => {
			setPosts([...posts, ...new Array(3).fill({ ...postInfo })])
		}, 1000)
	}

	const ping = async () => {
		const res = await fetch('http://localhost:3000/ping')
		const body = await res.text()
		console.log(body)
	}

	const resetPosts = () => {
		setPostChunkIndex(0)
		const postInfo = {
			profilePhoto: 'http://dummyimage.com/277x226.png/ff4444/ffffff',
			displayName: `Gaye Su Akyol | Index 0`,
			username: 'gayesuakyol',
			isFollowed: false,
			postId: '64edcf7dfc13ae35b0ad21eb',
			likeCount: 10564,
			isLiked: true,
			isSaved: true,
			createdAt: '7/18/2023',
			photoUrl: 'http://dummyimage.com/208x100.png/dddddd/000000'
		}

		setTimeout(() => {
			setPosts([...new Array(3).fill({ ...postInfo })])
		}, 1000)
	}

	useEffect(() => {
		ping()
		getPosts(postChunkIndex)
	}, [])

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<LogoTitle />
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonRefresher
					slot="fixed"
					pullFactor={0.5}
					pullMin={50}
					pullMax={100}
					onIonRefresh={ev => {
						// TODO: Refresh posts
						// ? Reset postChunkIndex

						setTimeout(() => {
							ev.detail.complete()
						}, 1000)
						resetPosts()
					}}
				>
					<IonRefresherContent refreshingSpinner={'bubbles'} pullingIcon={refreshOutline}></IonRefresherContent>
				</IonRefresher>

				<IonList>
					{posts.map((post, index) => {
						return <PostCard key={index} postInfo={post} />
					})}
				</IonList>

				<IonInfiniteScroll
					onIonInfinite={ev => {
						setPostChunkIndex(s => s + 1)
						getPosts(postChunkIndex + 1)
						// TODO: Get posts from backend and use .then method to call ev.target.complete()
						setTimeout(() => {
							ev.target.complete()
						}, 1000)
					}}
				>
					<IonInfiniteScrollContent></IonInfiniteScrollContent>
				</IonInfiniteScroll>
			</IonContent>
		</IonPage>
	)
}

export default Home
