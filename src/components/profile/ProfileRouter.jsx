import { useParams } from 'react-router'
import { getUserByUsername } from '../../api/mockUsers'
import MyProfile from '../../pages/MyProfile'
import UserProfile from '../../pages/UserProfile'

const ProfileRouter = () => {
	const { username } = useParams()
	// TODO: const user = useRecoilValue(userState)
	// TODO: Get user info by username from mock data

	const searchedUser = getUserByUsername(username)
	console.log(searchedUser)
	// TODO: Change condition to user.username == username
	return username == 'gayesuakyol' ? <MyProfile userInfo={searchedUser} /> : <UserProfile userInfo={searchedUser} />
}

export default ProfileRouter
