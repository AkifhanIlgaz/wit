import { useEffect, useState } from 'react'
import Firebase from '../api/firebase/firebase'

const Photo = () => {
	const [outfit, setOutfit] = useState(null)
	const outfitId = 'e75HRfkc28oUiYhn8xDy'
	const firebase = new Firebase()
	const getOutfit = async () => {
		const res = await firebase.getDocument('outfits', outfitId)
		setOutfit(res)
	}

	useEffect(() => {
		getOutfit()
	}, [])

	return outfit === null ? (
		'Loading'
	) : (
		<div
			style={{
				width: '100%',
				height: '100%',
				position: 'relative'
			}}
		>
			<img
				src={outfit.photoURL}
				style={{
					width: '100%',
					height: '100%'
				}}
			/>
			{outfit.links.map((link, index) => {
				return (
					<span
						key={index}
						style={{
							position: 'absolute',
							left: link.left,
							top: link.top,
							zIndex: 1
						}}
					>
						{link.link}
					</span>
				)
			})}
		</div>
	)
}

export default Photo
