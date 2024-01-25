import { type ShortDocument } from './document'

export type RegionLink = {
	id: string
	title: string
	date: string
	source: string
}

export type RegionItem = {
	title: string
	fullTitle: string
	mainDesc: string
	regionCode: string
	status: string
	type: string
	director: string
	vice: string
	accountant: string
	phones: string[]
	email: string
	address: string
	descList: string[]
	openDate: string
	logo: string
	mainInfoLogo: string
	site: string
	relatedObjects: string[]
	relatedProjects: string[]
	relatedLinks: RegionLink[]
	documents: ShortDocument[]
}
