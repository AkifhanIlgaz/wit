import PostCard from '../components/post/PostCard'
import Authorized from '../layouts/Authorized'

const Home = () => {
	return (
		<Authorized>
			<PostCard />
		</Authorized>
	)
}

export default Home
