import { IonAlert, IonCard, IonCardContent } from '@ionic/react'
import { Fragment, useState } from 'react'
import { useHistory } from 'react-router'

const OutfitLinkDot = ({ link }) => {
	const history = useHistory()

	const [isRedirectAlertOpen, setIsRedirectAlertOpen] = useState(false)
	const [redirectUrl, setRedirectUrl] = useState()

	return (
		<Fragment>
			<IonCard
				style={{
					position: 'absolute',
					left: link.left,
					top: link.top
				}}
				className="ion-no-margin "
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
							console.log(e.currentTarget.hrefq)
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

export default OutfitLinkDot
