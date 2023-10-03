import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonGrid, IonIcon, IonInput, IonLabel, IonRow, useIonPopover } from '@ionic/react'
import { trash } from 'ionicons/icons'
import { useForm } from 'react-hook-form'

const Popover = ({ link }) => {
	const { register, handleSubmit } = useForm()

	const updateLink = async data => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(updateLink)}>
			<IonGrid className="ion-align-items-center ion-justify-content-center  ">
				<IonRow className="ion-align-items-center ion-justify-content-center ">
					<IonCol>
						<IonCard className="ion-no-margin">
							<IonCardContent
								className="ion-no-padding ion-padding-top ion-padding-bottom"
								style={{
									paddingLeft: '.5em',
									paddingRight: '.5em'
								}}
							>
								<IonRow className="ion-align-items-center">
									<IonCol className="ion-no-padding ion-padding-bottom">
										<IonLabel>Title</IonLabel>
										<IonInput aria-label="title" value={link.title} className="ion-input"></IonInput>
									</IonCol>
								</IonRow>
								<IonRow className="ion-align-items-center">
									<IonCol className="ion-no-padding ion-padding-bottom">
										<IonLabel>Link</IonLabel>
										<IonInput aria-label="link" value={link.href} className="ion-input"></IonInput>
									</IonCol>
								</IonRow>

								<IonRow className="ion-align-items-center">
									<IonCol className="ion-no-padding">
										<IonButton color={'danger'}>
											<IonIcon icon={trash} slot="start"></IonIcon>
											Remove
										</IonButton>
									</IonCol>
								</IonRow>

								<IonRow className="ion-align-items-center">
									<IonCol className="ion-no-padding">
										<IonButtons>
											<IonButton>Cancel</IonButton>
											<IonButton>Edit</IonButton>
										</IonButtons>
									</IonCol>
								</IonRow>
							</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>
			</IonGrid>
		</form>
	)
}
const EditableOutfitLinkDot = ({ link }) => {
	const [present, dismiss] = useIonPopover(Popover, { link: link })

	return (
		<>
			<div
				className="animated-dot"
				style={{
					borderRadius: '50%',
					width: '1em',
					height: '1em',
					position: 'absolute',
					left: link.left,
					top: link.top,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			></div>
			<div
				style={{
					borderRadius: '50%',
					width: '1em',
					height: '1em',
					position: 'absolute',
					left: link.left,
					top: link.top,
					backgroundColor: 'white'
				}}
				onClick={e => {
					present({
						event: e
					})
				}}
			></div>
		</>
	)
}

export default EditableOutfitLinkDot
