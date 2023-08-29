import { IonGrid } from '@ionic/react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getPostById } from '../api/mockUsers'
import Authorized from '../layouts/Authorized'

const Post = () => {
	const { postId } = useParams()
	const post = getPostById(postId)

	useEffect(() => {
		const getPost = async postId => {}
		// TODO: Get post
		getPost()

		return () => {
			// TODO: Update post
		}
	}, [])

	return (
		<Authorized>
			<IonGrid></IonGrid>
		</Authorized>
	)
}

export default Post
