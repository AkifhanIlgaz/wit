import { IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonInput, IonLabel, IonRow, useIonPopover } from '@ionic/react'

const Popover = ({ link, removeLink, updateLink, i, dismiss }) => {
	return (
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
									<IonInput
										onIonChange={e => {
											link = { ...link, title: e.detail.value }
										}}
										aria-label="title"
										placeholder={link.title}
										clearOnEdit={true}
										className="ion-input ion-padding-start ion-padding-end"
									></IonInput>
								</IonCol>
							</IonRow>
							<IonRow className="ion-align-items-center">
								<IonCol className="ion-no-padding ion-padding-bottom">
									<IonLabel>Link</IonLabel>
									<IonInput
										onIonInput={e => {
											link = { ...link, href: e.detail.value }
										}}
										aria-label="link"
										placeholder={link.href}
										className="ion-input ion-padding-start ion-padding-end"
									></IonInput>
								</IonCol>
							</IonRow>

								<IonRow className="ion-align-items-center">
									<IonCol className="ion-no-padding">
										<IonButton
											color={'danger'}
											onClick={() => {
												removeLink(i)
												dismiss()
											}}
										>
											Remove
										</IonButton>
										<IonButton
											onClick={() => {
												dismiss()
												updateLink(link, i)
											}}
										>
											Edit
										</IonButton>
									</IonCol>
								</IonRow>
						</IonCardContent>
					</IonCard>
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}
const EditableOutfitLinkDot = ({ link, removeLink, updateLink, i }) => {
	const [present, dismiss] = useIonPopover(Popover, { link: link, removeLink: removeLink, updateLink: updateLink, i: i, dismiss: () => dismiss() })

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
