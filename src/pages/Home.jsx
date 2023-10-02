import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage, IonRefresher, IonRefresherContent, IonToolbar } from '@ionic/react'
import { refreshSharp } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import Firebase from '../api/firebase/firebase'
import { baseUrl, outfitsHome } from '../api/wit-api/endPoints'
import LogoTitle from '../components/LogoTitle'
import PostCard from '../components/post/PostCard'

const Home = () => {
	const firebase = new Firebase()
	const [posts, setPosts] = useState([])
	const [isOutfitOpen, setIsOutfitOpen] = useState(false)
	const [outfit, setOutfit] = useState({})

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
			console.log(newPosts)
			last === '' ? setPosts([...newPosts]) : setPosts([...posts, ...newPosts])
		})
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
					onIonRefresh={ev => {
						setTimeout(() => {
							getPosts().then(() => {
								ev.detail.complete()
							})
						}, 2000)
					}}
				>
					<IonRefresherContent refreshingSpinner={'bubbles'} pullingIcon={refreshSharp} refreshingText={'Loading'}></IonRefresherContent>
				</IonRefresher>

				<IonList>
					{posts.map((post, index) => {
						return <PostCard key={index} outfit={post} />
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
