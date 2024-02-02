import { type ReactNode } from 'react'

export type RelatedLink = {
	id: string
	title: string

	type?: string
	stateRegisterNumber?: string
	status?: string
	region?: string
}
export type LinkItem = {
	id: string
	link: string
	titleLink: string
	type?: 'doc' | 'pdf'
	label?: ReactNode | ReactNode[]
}
