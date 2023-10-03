import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage, IonRefresher, IonRefresherContent, IonToolbar } from '@ionic/react'
import { refreshSharp } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Firebase from '../api/firebase/firebase'
import { baseUrl, outfitsHome } from '../api/wit-api/endPoints'
import Finished from '../components/Finished'
import LogoTitle from '../components/LogoTitle'
import PostCard from '../components/post/PostCard'

const Home = () => {
	const firebase = new Firebase()
	const [posts, setPosts] = useState([])
	const [isLast, setIsLast] = useState(false)
	const [currentUser, loading] = useAuthState(firebase.auth)

	const getPosts = async (last = '') => {
		const idToken = await currentUser.getIdToken(true)
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
		if (newPosts === null) {
			setIsLast(true)
		}

		last === '' ? setPosts([...newPosts]) : setPosts([...posts, ...newPosts])
	}

	useEffect(() => {
		if (loading) return
		getPosts()
	}, [loading])

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
						setIsLast(false)
						getPosts().then(() => {
							ev.detail.complete()
						})
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
							// TODO: Delete timeout
							setTimeout(() => {
								ev.target.complete()
							}, 1000)
						})
					}}
				>
					<IonInfiniteScrollContent loadingText={'Please wait...'} loadingSpinner={'bubbles'} className="ion-margin">
						{isLast && <Finished />}
					</IonInfiniteScrollContent>
				</IonInfiniteScroll>
			</IonContent>
		</IonPage>
	)
}

export default Home
