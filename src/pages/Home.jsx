import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage, IonRefresher, IonRefresherContent, IonToolbar } from '@ionic/react'
import { refreshSharp } from 'ionicons/icons'
import { Fragment, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Firebase from '../api/firebase/firebase'
import { baseUrl, outfitsHome } from '../api/wit-api/endPoints'
import Finished from '../components/Finished'
import LogoTitle from '../components/LogoTitle'
import PostCard from '../components/post/PostCard'
import PostCardSkeleton from '../skeletons/PostCardSkeleton'

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

				{posts.length === 0 ? (
					new Array(2).fill(0).map(() => <PostCardSkeleton />)
				) : (
					<Fragment>
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
					</Fragment>
				)}
			</IonContent>
		</IonPage>
	)
}

export default Home
