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

	const getPosts = async (last = '') => {
		firebase.auth.onAuthStateChanged(async user => {
			const idToken = await user.getIdToken(true)
			const res = await fetch(
				`${baseUrl}${outfitsHome}?` +
					new URLSearchParams({
						last: last
					}),
				{
					method: 'GET',
					headers: {
						Authorization: idToken
					}
				}
			)

			const newPosts = await res.json()
			newPosts.forEach(post => {
				console.log(new Date(post.CreatedAt))
			})

			setPosts([...posts, ...newPosts])
		})
	}

	const resetPosts = () => {
		return getPosts()
	}

	useEffect(() => {
		getPosts()
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
						getPosts(posts.at(-1).createdAt).then(() => {
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
