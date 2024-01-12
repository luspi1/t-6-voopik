import { type FC } from 'react'

import { type Document } from 'src/types/document'
import styles from './index.module.scss'

type DocumentsListProps = {
	documents: Document[]
}

export const DocumentsList: FC<DocumentsListProps> = ({ documents }) => {
	return (
		<ul className={styles.documents}>
			{documents.map((item: Document) => (
				<li key={item.id}>
					<a className={styles.documentLink} href='#' download>
						{item.title}
					</a>

					<p className={styles.documentInfo}>
						{item.type}-файл, {item.size} Кбайт
					</p>
				</li>
			))}
		</ul>
	)
}
