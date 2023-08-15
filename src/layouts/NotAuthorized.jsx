import { IonCard, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import { React } from 'react'
import logo from '../images/logo.jpg'

export const NotAuthorized = ({ onSubmit, children }) => {
	return (
		<IonPage>
			<IonContent scrollY={false}>
				<form onSubmit={onSubmit}>
					<IonGrid className="ion-align-items-center ion-justify-content-center ion-height">
						<IonRow className="ion-align-items-center ion-justify-content-center ion-height">
							<IonCol size="12" size-md="8" size-lg="4">
								<IonCard className="ion-transparent ion-no-padding">
									<img
										src={logo}
										alt="logo"
										style={{
											width: '75%',
											marginLeft: '10%',
											marginBottom: '0'
										}}
									/>
									{children}
								</IonCard>
							</IonCol>
						</IonRow>
					</IonGrid>
				</form>
			</IonContent>
		</IonPage>
	)
}

export default NotAuthorized
