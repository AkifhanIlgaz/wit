import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import { appsOutline, bookmarksOutline } from 'ionicons/icons'

const PostTabs = ({selectedTab, setSelectedTab}) => {
	return (
		<IonGrid className="ion-no-padding">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonCol
					className="ion-no-padding"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onClick={() => setSelectedTab('posts')}
				>
					<IonButton color={'transparent'}>
						<IonIcon icon={appsOutline} color={selectedTab === 'posts' ? 'tertiary' : 'medium'}></IonIcon>
					</IonButton>
				</IonCol>
				<IonCol
					className="ion-no-padding"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onClick={() => setSelectedTab('saved')}
				>
					<IonButton color={'transparent'}>
						<IonIcon icon={bookmarksOutline} color={selectedTab === 'saved' ? 'tertiary' : 'medium'}></IonIcon>
					</IonButton>
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}

export default PostTabs
