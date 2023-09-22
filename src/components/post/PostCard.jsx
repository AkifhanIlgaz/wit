import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from '@ionic/react'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import outfitState from '../../atoms/outfit'
import PostHeader from './PostHeader'
import PostToolbar from './PostToolbar'

const PostCard = ({ outfit }) => {
	const history = useHistory()
	const [currentOutfit, setCurrentOutfit] = useRecoilState(outfitState)

	return (
		<IonGrid className="ion-no-padding ">
			<IonCard>
				<PostHeader postInfo={outfit} />

				<IonRow className="ion-justify-content-center ">
					<IonCol
						className="ion-no-padding"
						style={{
							width: '90vw',
							height: '40vh'
						}}
					>
						<img
							src={outfit.photoUrl}
							alt=""
							height={'100%'}
							width={'100%'}
							onClick={() => {
								setCurrentOutfit(outfit)
								history.push(`/outfit/${outfit.id}`)
							}}
						/>
					</IonCol>
				</IonRow>
				<IonRow
					className="ion-align-items-center ion-justify-content-center "
					style={{
						margin: '.4em 0'
					}}
				>
					<IonCol>
						<IonCardContent className="ion-no-padding">
							<PostToolbar postInfo={outfit} />
						</IonCardContent>
					</IonCol>
				</IonRow>
			</IonCard>
		</IonGrid>
	)
}

export default PostCard
