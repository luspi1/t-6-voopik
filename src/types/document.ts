export type FileLinksItem = {
	id: string
	type: string
	size: string
}

export type Document = {
	id?: string
	type?: string
	title: string
	isMain?: boolean
	size?: string

	description?: string
	version?: string
	date: string
	author: string
	fileLinks: FileLinksItem[]
}
