const mockUsers = [
	{
		displayName: 'Gaye Su Akyol',
		username: 'gayesuakyol',
		profilePhoto: 'http://dummyimage.com/277x226.png/ff4444/ffffff',
		isFollowed: false,
		isSendMessageDisabled: false,
		followerCount: 735,
		followingCount: 817,
		posts: [
			{
				postId: '64edcf7dfc13ae35b0ad21eb',
				likeCount: 225,
				isLiked: true,
				isSaved: true,
				createdAt: '7/18/2023',
				photoUrl: 'http://dummyimage.com/208x100.png/dddddd/000000'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ec',
				likeCount: 732,
				isLiked: false,
				isSaved: false,
				createdAt: '10/7/2022',
				photoUrl: 'http://dummyimage.com/217x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ed',
				likeCount: 406,
				isLiked: true,
				isSaved: false,
				createdAt: '6/12/2023',
				photoUrl: 'http://dummyimage.com/184x100.png/dddddd/000000'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ee',
				likeCount: 958,
				isLiked: true,
				isSaved: false,
				createdAt: '5/27/2023',
				photoUrl: 'http://dummyimage.com/123x100.png/cc0000/ffffff'
			}
		],
		saved: [
			{
				postId: '64edcf7dfc13ae35b0ad21df',
				likeCount: 686,
				isLiked: false,
				isSaved: true,
				createdAt: '7/22/2023',
				photoUrl: 'http://dummyimage.com/158x100.png/5fa2dd/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e0',
				likeCount: 819,
				isLiked: true,
				isSaved: true,
				createdAt: '8/21/2023',
				photoUrl: 'http://dummyimage.com/157x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e1',
				likeCount: 116,
				isLiked: false,
				isSaved: false,
				createdAt: '4/11/2023',
				photoUrl: 'http://dummyimage.com/197x100.png/ff4444/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e2',
				likeCount: 596,
				isLiked: false,
				isSaved: true,
				createdAt: '1/9/2023',
				photoUrl: 'http://dummyimage.com/210x100.png/5fa2dd/ffffff'
			}
		]
	},
	{
		displayName: 'Ula Maty',
		username: 'umaty0',
		profilePhoto: 'http://dummyimage.com/191x389.png/cc0000/ffffff',
		isFollowed: true,
		isSendMessageDisabled: true,
		followerCount: 735,
		followingCount: 193,
		posts: [
			{
				postId: '64edcf7dfc13ae35b0ad21df',
				likeCount: 686,
				isLiked: false,
				isSaved: true,
				createdAt: '7/22/2023',
				photoUrl: 'http://dummyimage.com/158x100.png/5fa2dd/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e0',
				likeCount: 819,
				isLiked: true,
				isSaved: true,
				createdAt: '8/21/2023',
				photoUrl: 'http://dummyimage.com/157x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e1',
				likeCount: 116,
				isLiked: false,
				isSaved: false,
				createdAt: '4/11/2023',
				photoUrl: 'http://dummyimage.com/197x100.png/ff4444/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e2',
				likeCount: 596,
				isLiked: false,
				isSaved: true,
				createdAt: '1/9/2023',
				photoUrl: 'http://dummyimage.com/210x100.png/5fa2dd/ffffff'
			}
		]
	},
	{
		displayName: 'Zaccaria Beric',
		username: 'zberic1',
		profilePhoto: 'http://dummyimage.com/395x128.png/cc0000/ffffff',
		isFollowed: false,
		isSendMessageDisabled: true,
		followerCount: 618,
		followingCount: 332,
		posts: [
			{
				postId: '64edcf7dfc13ae35b0ad21e3',
				likeCount: 248,
				isLiked: true,
				isSaved: true,
				createdAt: '10/30/2022',
				photoUrl: 'http://dummyimage.com/217x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e4',
				likeCount: 525,
				isLiked: true,
				isSaved: false,
				createdAt: '3/21/2023',
				photoUrl: 'http://dummyimage.com/167x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e5',
				likeCount: 229,
				isLiked: true,
				isSaved: true,
				createdAt: '11/19/2022',
				photoUrl: 'http://dummyimage.com/134x100.png/ff4444/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e6',
				likeCount: 448,
				isLiked: false,
				isSaved: false,
				createdAt: '8/19/2023',
				photoUrl: 'http://dummyimage.com/152x100.png/cc0000/ffffff'
			}
		]
	},
	{
		displayName: 'Myles Paver',
		username: 'mpaver2',
		profilePhoto: 'http://dummyimage.com/201x225.png/dddddd/000000',
		isFollowed: false,
		isSendMessageDisabled: true,
		followerCount: 785,
		followingCount: 520,
		posts: [
			{
				postId: '64edcf7dfc13ae35b0ad21e7',
				likeCount: 298,
				isLiked: false,
				isSaved: false,
				createdAt: '3/19/2023',
				photoUrl: 'http://dummyimage.com/177x100.png/dddddd/000000'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e8',
				likeCount: 228,
				isLiked: false,
				isSaved: false,
				createdAt: '4/3/2023',
				photoUrl: 'http://dummyimage.com/209x100.png/5fa2dd/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21e9',
				likeCount: 896,
				isLiked: true,
				isSaved: true,
				createdAt: '3/27/2023',
				photoUrl: 'http://dummyimage.com/219x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ea',
				likeCount: 436,
				isLiked: true,
				isSaved: false,
				createdAt: '1/29/2023',
				photoUrl: 'http://dummyimage.com/232x100.png/5fa2dd/ffffff'
			}
		]
	},
	{
		displayName: 'Etti Lardeur',
		username: 'elardeur3',
		profilePhoto: 'http://dummyimage.com/277x226.png/ff4444/ffffff',
		isFollowed: false,
		isSendMessageDisabled: false,
		followerCount: 735,
		followingCount: 817,
		posts: [
			{
				postId: '64edcf7dfc13ae35b0ad21eb',
				likeCount: 225,
				isLiked: true,
				isSaved: true,
				createdAt: '7/18/2023',
				photoUrl: 'http://dummyimage.com/208x100.png/dddddd/000000'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ec',
				likeCount: 732,
				isLiked: false,
				isSaved: false,
				createdAt: '10/7/2022',
				photoUrl: 'http://dummyimage.com/217x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ed',
				likeCount: 406,
				isLiked: true,
				isSaved: false,
				createdAt: '6/12/2023',
				photoUrl: 'http://dummyimage.com/184x100.png/dddddd/000000'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21ee',
				likeCount: 958,
				isLiked: true,
				isSaved: false,
				createdAt: '5/27/2023',
				photoUrl: 'http://dummyimage.com/123x100.png/cc0000/ffffff'
			}
		]
	},
	{
		displayName: 'Catlin Robert',
		username: 'crobert4',
		profilePhoto: 'http://dummyimage.com/240x487.png/cc0000/ffffff',
		isFollowed: true,
		isSendMessageDisabled: true,
		followerCount: 335,
		followingCount: 849,
		posts: [
			{
				postId: '64edcf7dfc13ae35b0ad21ef',
				likeCount: 850,
				isLiked: true,
				isSaved: false,
				createdAt: '4/4/2023',
				photoUrl: 'http://dummyimage.com/211x100.png/dddddd/000000'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21f0',
				likeCount: 409,
				isLiked: true,
				isSaved: true,
				createdAt: '10/21/2022',
				photoUrl: 'http://dummyimage.com/117x100.png/cc0000/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21f1',
				likeCount: 955,
				isLiked: true,
				isSaved: false,
				createdAt: '4/12/2023',
				photoUrl: 'http://dummyimage.com/173x100.png/5fa2dd/ffffff'
			},
			{
				postId: '64edcf7dfc13ae35b0ad21f2',
				likeCount: 225,
				isLiked: false,
				isSaved: true,
				createdAt: '10/9/2022',
				photoUrl: 'http://dummyimage.com/178x100.png/ff4444/ffffff'
			}
		]
	}
]
export const getUserByUsername = username => {
	return mockUsers.find(user => user.username === username)
}

export const getPostById = postId => {
	for (const user of mockUsers) {
		for (const post of user.posts) {
			if (post.postId === postId) {
				return {
					...post,
					username: user.username
				}
			}
		}
	}
}
