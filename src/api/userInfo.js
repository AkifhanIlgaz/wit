class UserInfo {
	/**
	 *
	 * @param {string} displayName
	 * @param {string} username
	 * @param {string} profilePhoto
	 * @param {boolean} isFollowed
	 * @param {boolean} isSendMessageDisabled
	 * @param {number} followerCount
	 * @param {number} followingCount
	 * @param {Post[]} posts
	 * @param {Post[]} saved
	 */
	constructor(displayName, username, profilePhoto, isFollowed, isSendMessageDisabled, followerCount, followingCount, posts, saved) {
		this.displayName = displayName
		this.username = username
		this.profilePhoto = profilePhoto
		this.isFollowed = isFollowed
		this.isSendMessageDisabled = isSendMessageDisabled
		this.followerCount = followerCount
		this.followingCount = followingCount
		this.posts = posts
		this.saved = saved
	}
}

class Post {
	/**
	 *
	 * @param {string} postId
	 * @param {string} photoUrl
	 * @param {number} likeCount
	 * @param {boolean} isLiked
	 * @param {boolean} isSaved
	 * @param {[]Reply} replies
	 * @param {Date} createdAt
	 */
	constructor(postId, photoUrl, likeCount, isLiked, isSaved, replies, createdAt) {
		this.postId = postId
		this.photoUrl = photoUrl
		this.likeCount = likeCount
		this.isLiked = isLiked
		this.isSaved = isSaved
		this.replies = replies
		this.createdAt = createdAt
	}
}

// TODO: Reply class

const userInfo = {
	userName: 'gayesuakyol',
	profilePhoto: 'https://media.istockphoto.com/id/1419410282/tr/foto%C4%9Fraf/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=5LYU9_3FnIq_J5-X2a64OgqObDsx-50mdeTv3Y1bM1g=',
	isFollowed: true,
	isSendMessageDisabled: false,
	followerCount: {
		count: 77
	},
	followingCount: {
		count: 982
	},
	postCount: {
		count: 7
	},
	posts: [
		{ id: '64ec502cfc13ae46c7ad21df', photoUrl: 'http://dummyimage.com/457x100.png/ff4444/ffffff', likeCount: 310 },
		{ id: '64ec502cfc13ae46c7ad21e0', photoUrl: 'http://dummyimage.com/258x100.png/5fa2dd/ffffff', likeCount: 26 },
		{ id: '64ec502cfc13ae46c7ad21e1', photoUrl: 'http://dummyimage.com/376x100.png/5fa2dd/ffffff', likeCount: 410 },
		{ id: '64ec502cfc13ae46c7ad21e2', photoUrl: 'http://dummyimage.com/431x100.png/dddddd/000000', likeCount: 41 },
		{ id: '64ec502cfc13ae46c7ad21e3', photoUrl: 'http://dummyimage.com/441x100.png/5fa2dd/ffffff', likeCount: 2546 },
		{ id: '64ec502cfc13ae46c7ad21e4', photoUrl: 'http://dummyimage.com/291x100.png/5fa2dd/ffffff', likeCount: 1365 }
	],
	saved: [
		{ id: '64ec5057fc13ae44c7ad2211', photoUrl: 'http://dummyimage.com/269x100.png/dddddd/000000', likeCount: 4700 },
		{ id: '64ec5057fc13ae44c7ad2212', photoUrl: 'http://dummyimage.com/471x100.png/5fa2dd/ffffff', likeCount: 3228 },
		{ id: '64ec5057fc13ae44c7ad2213', photoUrl: 'http://dummyimage.com/441x100.png/ff4444/ffffff', likeCount: 12 },
		{ id: '64ec5057fc13ae44c7ad2214', photoUrl: 'http://dummyimage.com/348x100.png/ff4444/ffffff', likeCount: 59 },
		{ id: '64ec5057fc13ae44c7ad2215', photoUrl: 'http://dummyimage.com/318x100.png/5fa2dd/ffffff', likeCount: 223 },
		{ id: '64ec5057fc13ae44c7ad2216', photoUrl: 'http://dummyimage.com/285x100.png/5fa2dd/ffffff', likeCount: 375 }
	]
}

export default userInfo
