import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import userState from '../atoms/user'
import MyProfile from './MyProfile'
import UserProfile from './UserProfile'
import userInfo from '../api/userInfo'

const Profile = () => {
	const { uid } = useParams()
	const user = useRecoilValue(userState)


	return user.uid === uid ? <MyProfile userInfo={userInfo} /> : <UserProfile userInfo={userInfo} />
}

export default Profile
