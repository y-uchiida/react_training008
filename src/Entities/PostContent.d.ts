import { FieldValue } from "firebase/firestore"

export default interface PostContent {
	authorId: string
	authorName: string
	authorAvatar?: string | null
	verified?: boolean
	content: string
	imageUrl?: string[] | null,
	createdTime: FieldValue
}
