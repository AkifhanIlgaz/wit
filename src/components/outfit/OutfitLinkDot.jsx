import { IonAlert, IonContent, useIonPopover } from '@ionic/react'
import { useState } from 'react'

const Popover = ({ link, onDismiss }) => {
	const [isRedirectAlertOpen, setIsRedirectAlertOpen] = useState(false)

	return (
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
				header="Do you want to go to this site ?"
				subHeader={link.href}
				buttons={[
					{
						text: 'Cancel',
						role: 'destructive'
					},
					{
						text: 'OK',
						role: 'confirm',
						handler: () => {
							window.location.replace(link.href)
						}
					}
				]}
				onDidDismiss={() => {
					onDismiss()
					setIsRedirectAlertOpen(false)
				}}
			></IonAlert>
		</IonContent>
	)
}

const OutfitLinkDot = ({ link }) => {
	const [present, dismiss] = useIonPopover(Popover, { link: link, onDismiss: (data, role) => dismiss(data, role) })

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

export default OutfitLinkDot
