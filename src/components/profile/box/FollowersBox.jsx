import { IonButton } from '@ionic/react'
import { Fragment, useState } from 'react'
import formatCount from '../../../api/numberFormat'
import UserList from '../../user/UserList'

const FollowersBox = ({ users, getFollowers }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Fragment>
			<IonButton color={'transparent'} className="ion-no-padding ion-no-margin" onClick={() => setIsOpen(true)}>
				<span className="box ion-padding">
					<span className="count">{formatCount(users.length)}</span>
					<span className="title">{'Followers'}</span>
				</span>
			</IonButton>

			<UserList isOpen={isOpen} setIsOpen={setIsOpen} users={users} getUsers={getFollowers} />
		</Fragment>
	)
}

export default FollowersBox
