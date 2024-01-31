import { type FC } from 'react'
import { type ShortDocument } from 'src/types/document'

import { LinksList } from 'src/components/links-list/links-list'
import { formatDocumentLinks } from 'src/helpers/utils'

import styles from './index.module.scss'

export type DepartmentDocumentsProps = {
	documents?: ShortDocument[]
}

export const DepartmentDocuments: FC<DepartmentDocumentsProps> = ({ documents }) => {
	return (
		<div className={styles.container}>
			<LinksList dataList={formatDocumentLinks(documents)} title='Документы Отделения' />
		</div>
	)
}
