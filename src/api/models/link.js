export class Link {
	constructor(title, href, left, top) {
		this.title = title
		this.href = href
		this.position = new Position(left, top)
	}
}

class Position {
	constructor(left, top) {
		this.left = left
		this.top = top
	}
}

export default Link
