import { IonAlert, IonButton, IonCard, IonCardContent, IonIcon, useIonPopover } from '@ionic/react'
import { add } from 'ionicons/icons'
import { Fragment, useState } from 'react'

const Popover = ({ link }) => {
	const [redirectUrl, setRedirectUrl] = useState()
	const [isRedirectAlertOpen, setIsRedirectAlertOpen] = useState(false)
	const [isPopoverOpen, setIsPopoverOpen] = useState(false)

	return (
		<Fragment>
			<IonCard
				className="ion-no-margin"
				style={{
					left: link.left,
					top: link.top
				}}
			>
				<IonCardContent
					className="ion-no-padding"
					style={{
						padding: '.5rem'
					}}
				>
					<a
						href={link.url}
						style={{
							width: '100%',
							height: '100%',
							textDecoration: 'none',
							color: 'black'
						}}
						onClick={e => {
							e.preventDefault()
							setRedirectUrl(e.currentTarget.href)
							setIsRedirectAlertOpen(true)
						}}
					>
						{link.title}
					</a>
				</IonCardContent>
			</IonCard>
			<IonAlert
				isOpen={isRedirectAlertOpen}
				message={`Do you want to go to this site ${redirectUrl}`}
				buttons={[
					{
						text: 'OK',
						role: 'confirm',
						handler: () => {
							window.location.replace(redirectUrl)
						}
					}
				]}
				onDidDismiss={() => setIsRedirectAlertOpen(false)}
			></IonAlert>
		</Fragment>
	)
}

const OutfitLinkDot = ({ link }) => {
	const [present, dismiss] = useIonPopover(Popover, { link: link })

	return (
		<IonButton
			style={{
				position: 'absolute',
				left: link.left,
				top: link.top
			}}
			color={'tertiary'}
			size="small"
			onClick={() => {
				present({
					side: 'bottom',
					alignment: 'center'
				})
			}}
		>
			<IonIcon icon={add}></IonIcon>
		</IonButton>
	)
}

export default OutfitLinkDot
