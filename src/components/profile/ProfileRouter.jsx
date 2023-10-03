import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import userState from '../../atoms/user'
import MyProfile from '../../pages/MyProfile'
import UserProfile from '../../pages/UserProfile'

const ProfileRouter = () => {
	const { uid } = useParams()
	const user = useRecoilValue(userState)

	return uid == user.uid ? <MyProfile uid={uid} /> : <UserProfile uid={uid} />
}

export default ProfileRouter
