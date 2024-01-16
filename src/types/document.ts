export type Document = {
	id?: string
	title: string
	// type: 'mainDocument' | 'document'
	type: string
	size?: string

	description?: string
	version?: string
	date?: string
	author?: string
	documents?: Array<{ id: string; type: string; size: string }>
}
