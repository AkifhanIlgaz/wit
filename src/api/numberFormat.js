const formatCount = count => {
	let options
	if (count >= 10000) {
		options = {
			notation: 'compact',
			maximumFractionDigits: 1
		}
	}

	return Intl.NumberFormat('en-US', options).format(count)
}

export default formatCount
