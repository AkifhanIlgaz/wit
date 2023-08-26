const AnalyticsBox = ({ boxInfo }) => {
	return (
		<span className="box ion-padding">
			<span className="count">{boxInfo.count}</span>
			<span className="title">{boxInfo.title}</span>
		</span>
	)
}

export default AnalyticsBox
