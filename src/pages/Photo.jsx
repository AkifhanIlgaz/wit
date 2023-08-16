import { IonContent, IonPage } from '@ionic/react'
import Tree from '../images/tree.jpg'

const Photo = () => {
	return (
		<IonPage>
			<IonContent className="ion-no-padding">
				<img
					src={Tree}
					style={{
						width: '50%',
						height: '50%',
						margin: '100px'
					}}
					useMap="#treeMap"
					id="image"
					onClick={e => {
						console.log(e.currentTarget.getBoundingClientRect())
					}}
				/>

				{/* <map name="treeMap">
				<area shape="circle" coords="195,273,50" alt="" />
			</map> */}
			</IonContent>
		</IonPage>
	)
}

export default Photo
