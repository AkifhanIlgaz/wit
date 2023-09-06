import { IonAlert } from '@ionic/react'
import isUrlHttp from 'is-url-http'
import { useState } from 'react'
import OutfitLinkDot from './OutfitLinkDot'

const AddLinks = ({ photo }) => {
	const [currentDot, setCurrentDot] = useState({})
	const [isAlertOpen, setIsAlertOpen] = useState(false)
	const [isErrorOpen, setIsErrorOpen] = useState(false)
	const errorMessage = 'Please enter an valid URL'
	const [links, setLinks] = useState([])

	const reset = () => {
		setCurrentDot({})
		setLinks([])
	}

	return (
		<div
			style={{
				position: 'relative'
			}}
		>
			<img
				src={photo}
				style={{
					width: '100vw',
					height: '100vh'
				}}
				onClick={e => {
					const rect = e.currentTarget.getBoundingClientRect()

					// Relative to clicked image
					const clicked = {
						x: e.clientX - rect.x,
						y: e.clientY - rect.y
					}

					const point = {
						left: (clicked.x / rect.width) * 100,
						top: (clicked.y / rect.height) * 100
					}

					setIsAlertOpen(true)
					setCurrentDot(point)
				}}
			/>
			<IonAlert
				isOpen={isAlertOpen}
				header="Please enter your info"
				buttons={[
					{
						text: 'Cancel',
						role: 'destructive',
						handler: () => {
							setCurrentDot({})
						}
					},
					{
						text: 'Save',
						role: 'confirm',
						handler: data => {
							if (isUrlHttp(data['0'])) {
								setLinks([
									...links,
									{
										left: `${currentDot.left - 2}%`,
										top: `${currentDot.top - 1}%`,
										url: data['0']
									}
								])
							} else {
								setIsErrorOpen(true)
							}
						}
					}
				]}
				inputs={[
					{
						type: 'url',
						placeholder: 'Link'
					}
				]}
				onDidDismiss={() => {
					setIsAlertOpen(false)
				}}
			></IonAlert>

			{links.map((link, index) => (
				<OutfitLinkDot key={index} link={link} />
			))}

			<IonAlert isOpen={isErrorOpen} message={errorMessage} buttons={['OK']} onDidDismiss={() => setIsErrorOpen(false)}></IonAlert>
		</div>
	)
}

export default AddLinks
