import { type ShortDocument } from 'src/types/document'

export type UserLink = {
	id: string
	title: string
	date: string
	source: string
}

export type UserItem = {
	id: string
	avatar: string
	fullname: string
	statuses: string[]
	mainStatus: string
	mainDesc: string
	birthday: string
	position: string
	group: string
	regDate: string
	locality: string
	gender: 'Мужской' | 'Женский'
	phones: string[]
	email: string
	website: string
	relatedObjects: string[]
	relatedProjects: string[]
	relatedLinks: UserLink[]
	documents: ShortDocument[]
}
