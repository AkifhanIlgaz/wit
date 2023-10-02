import { IonAlert, IonContent, useIonPopover } from '@ionic/react'
import { useState } from 'react'

const Popover = ({ link }) => {
	const [isRedirectAlertOpen, setIsRedirectAlertOpen] = useState(false)

	return (
		// <Fragment>
		// 	<IonCard className="ion-no-margin">
		// 		<IonCardContent
		// 			className="ion-no-padding"
		// 			style={{
		// 				padding: '.5rem'
		// 			}}
		// 		>
		// 			<a
		// 				href={link.url}
		// 				style={{
		// 					width: '100%',
		// 					height: '100%',
		// 					textDecoration: 'none',
		// 					color: 'black'
		// 				}}
		// 				onClick={e => {
		// 					e.preventDefault()
		// 					setRedirectUrl(e.currentTarget.href)
		// 					setIsRedirectAlertOpen(true)
		// 				}}
		// 			>
		// 				{link.title}
		// 			</a>
		// 		</IonCardContent>
		// 	</IonCard>

		// </Fragment>
		<IonContent
			scrollY={false}
			className="ion-padding ion-text-center ion-margin-top"
			onClick={e => {
				e.preventDefault()
				setIsRedirectAlertOpen(true)
			}}
		>
			<span
				style={{
					textDecoration: 'none',
					color: 'black'
				}}
			>
				{link.title}
			</span>
			<IonAlert
				isOpen={isRedirectAlertOpen}
				message={`Do you want to go to this site ${link.href}`}
				buttons={[
					{
						text: 'OK',
						role: 'confirm',
						handler: () => {
							window.location.replace(link.href)
						}
					}
				]}
				onDidDismiss={() => setIsRedirectAlertOpen(false)}
			></IonAlert>
		</IonContent>
	)
}

const OutfitLinkDot = ({ link }) => {
	const [present, dismiss] = useIonPopover(Popover, { link: link })

	return (
		<div
			className="animated-dot"
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
					event: e,
					reference: 'event'
				})
			}}
		></div>
	)
}

export default OutfitLinkDot
