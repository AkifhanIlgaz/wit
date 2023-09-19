import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import userState from '../../atoms/user'
import MyProfile from '../../pages/MyProfile'
import UserProfile from '../../pages/UserProfile'

const ProfileRouter = () => {
	const { uid } = useParams()
	const user = useRecoilValue(userState)
	const [searchedUser, setSearchedUser] = useState({})

	useEffect(() => {
		const fetchData = async () => {}

		fetchData()
	}, [])

	return uid == user.uid ? <MyProfile userInfo={searchedUser} /> : <UserProfile userInfo={searchedUser} />
}

export default ProfileRouter
