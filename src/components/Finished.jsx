import { IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import { checkmarkDone } from 'ionicons/icons'
import { Fragment } from 'react'

const Finished = () => {
	return (
		<Fragment>
			<IonGrid color="success">
				<IonRow>
					<IonCol className="ion-no-padding">
						<IonIcon color="primary" icon={checkmarkDone} size="large"></IonIcon>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol
						className="ion-no-padding"
						style={{
							color: '#40489c'
						}}
					>
						You have seen all outfits !
					</IonCol>
				</IonRow>
			</IonGrid>
		</Fragment>
	)
}

export default Finished
