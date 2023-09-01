import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import { appsOutline, bookmarksOutline } from 'ionicons/icons'

const PostTabs = ({ selectedTab, setSelectedTab }) => {
	return (
		<IonGrid className="ion-no-padding">
			<IonRow className="ion-align-items-center ion-justify-content-center">
				<IonCol
					className="ion-no-padding"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderTop: selectedTab === 'posts' && '2px solid grey'
					}}
					onClick={() => setSelectedTab('posts')}
				>
					<IonButton color={'transparent'} className="ion-no-margin ion-no-padding">
						<IonIcon icon={appsOutline} color={selectedTab === 'posts' ? 'dark' : 'medium'}></IonIcon>
					</IonButton>
				</IonCol>
				<IonCol
					className="ion-no-padding"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderTop: selectedTab === 'saved' && '2px solid grey'
					}}
					onClick={() => setSelectedTab('saved')}
				>
					<IonButton color={'transparent'} className="ion-no-margin ion-no-padding">
						<IonIcon icon={bookmarksOutline} color={selectedTab === 'saved' ? 'dark' : 'medium'}></IonIcon>
					</IonButton>
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}

export default PostTabs
