import { IonButton } from '@ionic/react'
import { Fragment } from 'react'
import formatCount from '../../../api/numberFormat'

const PostBox = ({ count }) => {
	return (
		<Fragment>
			<IonButton color={'transparent'} className="ion-no-padding ion-no-margin">
				<span className="box ion-padding">
					<span className="count">{formatCount(count)}</span>
					<span className="title">{'Posts'}</span>
				</span>
			</IonButton>
		</Fragment>
	)
}

export default PostBox
