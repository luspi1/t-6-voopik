export type FileLinksItem = {
	id: string
	type: string
	size: string
}

export type Document = {
	id: string
	title: string
	isMain?: boolean

	description?: string
	version?: string
	date: string
	author: string
	fileLinks: FileLinksItem[]
}

export type AsideDocument = {
	id: string
	title: string
	type: string
	size: string
}
