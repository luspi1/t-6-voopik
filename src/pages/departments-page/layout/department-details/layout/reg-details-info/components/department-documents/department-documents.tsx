import { type FC } from 'react'
import { type ShortDocument } from 'src/types/document'
import { type LinkItem } from 'src/types/global'

import { LinksList } from 'src/components/links-list/links-list'

import styles from './index.module.scss'

export type DepartmentDocumentsProps = {
	documents?: ShortDocument[]
}

export const DepartmentDocuments: FC<DepartmentDocumentsProps> = ({ documents }) => {
	const formatDocumentLinks = (data: ShortDocument[] | undefined): LinkItem[] | undefined => {
		if (!data) return undefined
		return data.map((docItem) => ({
			id: docItem.id,
			link: docItem.link,
			titleLink: docItem.title,
			type: docItem.type,
			label: [`${docItem.type}-файл`, docItem.size],
		}))
	}

	return (
		<div className={styles.container}>
			<LinksList dataList={formatDocumentLinks(documents)} title='Документы Отделения' />
		</div>
	)
}
