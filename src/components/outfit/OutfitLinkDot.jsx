import { IonCard, IonCardContent } from '@ionic/react'

const OutfitLinkDot = ({ link }) => {
	return (
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
						height: '100%'
					}}
				></a>
			</IonCardContent>
		</IonCard>
	)
}

export default OutfitLinkDot
