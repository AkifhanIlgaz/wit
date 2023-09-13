import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage, IonRefresher, IonRefresherContent, IonToolbar } from '@ionic/react'
import { refreshOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import Firebase from '../api/firebase/firebase'
import { baseUrl, outfitsHome } from '../api/wit-api/endPoints'
import LogoTitle from '../components/LogoTitle'
import PostCard from '../components/post/PostCard'

const Home = () => {
	const firebase = new Firebase()
	const [posts, setPosts] = useState([])
	let postChunkIndex = 0

	let idToken
	firebase.auth.onAuthStateChanged(async user => {
		idToken = await user.getIdToken(true)
	})

	const getPosts = async () => {
		const data = new URLSearchParams()
		data.append('chunk-index', postChunkIndex)

		const res = await fetch(`${baseUrl}${outfitsHome}`, {
			method: 'GET',
			headers: {
				Authorization: idToken,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		})

		const newPosts = await res.json()
		setPosts([...posts, ...newPosts])
	}

	const resetPosts = () => {
		postChunkIndex = 0
		return getPosts()
	}

	useEffect(() => {
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
						resetPosts().then(() => {
							ev.detail.complete()
						})
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
						getPosts(++postChunkIndex).then(() => {
							ev.target.complete()
						})
					}}
				>
					<IonInfiniteScrollContent></IonInfiniteScrollContent>
				</IonInfiniteScroll>
			</IonContent>
		</IonPage>
	)
}

export default Home
