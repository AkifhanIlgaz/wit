import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import Firebase from '../../api/firebase/firebase'
import { baseUrl } from '../../api/wit-api/endPoints'
import userState from '../../atoms/user'
import MyProfile from '../../pages/MyProfile'
import UserProfile from '../../pages/UserProfile'

const ProfileRouter = () => {
	const { uid } = useParams()
	const user = useRecoilValue(userState)
	const [searchedUser, setSearchedUser] = useState({})
	const firebase = new Firebase()

	useEffect(() => {
		const fetchData = async () => {
			firebase.auth.onAuthStateChanged(async user => {
				const idToken = await user.getIdToken(true)
				const res = await fetch(
					`${baseUrl}user?` +
						new URLSearchParams({
							uid: uid
						}),
					{
						method: 'GET',
						headers: {
							Authorization: idToken
						}
					}
				)
				const u = await res.json()
				setSearchedUser(u)
			})
		}

		fetchData()
	}, [])

	return uid == user.uid ? <MyProfile userInfo={searchedUser} /> : <UserProfile userInfo={searchedUser} />
}

export default ProfileRouter
