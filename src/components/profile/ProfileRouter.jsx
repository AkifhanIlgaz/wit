import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import userInfo from '../../api/userInfo'
import userState from '../../atoms/user'
import MyProfile from '../../pages/MyProfile'
import UserProfile from '../../pages/UserProfile'

const ProfileRouter = () => {
	const { uid } = useParams()
	const user = useRecoilValue(userState)

	return user.uid === uid ? <MyProfile userInfo={userInfo} /> : <UserProfile userInfo={userInfo} />
}

export default ProfileRouter
