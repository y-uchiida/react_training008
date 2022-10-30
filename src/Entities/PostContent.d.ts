export default interface PostContent {
	authorId: string
	authorName: string
	authorAvatar?: string | null
	content: string
	imageUrl?: string[] | null
}
