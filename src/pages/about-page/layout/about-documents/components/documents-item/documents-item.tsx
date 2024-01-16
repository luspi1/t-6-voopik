import { type FC } from 'react'
import cn from 'classnames'

import { type Document } from 'src/types/document'
import styles from './index.module.scss'

export type DocumentsItemProps = {
	data: Document
}

export const DocumentsItem: FC<DocumentsItemProps> = ({ data }) => {
	return (
		<div
			className={cn(styles.documentsItem, data.type === 'mainDocument' ? styles.mainDocument : '')}
		>
			{data.type === 'mainDocument' ? <h3>{data.title}</h3> : <h4>{data.title}</h4>}
			{data.description && <p>{data.description}</p>}

			<div className={styles.footer}>
				<ul className={styles.downloadLinks}>
					{data.documents?.map((item) => (
						<li key={item.id}>
							<a href='#' download>
								Скачать {item.type} ({item.size} Мб)
							</a>
						</li>
					))}
				</ul>

				<p>
					Версия <b>{data.version}</b>, загружена <b>{data.date}</b>, издан: <b>{data.author}</b>
				</p>
			</div>
		</div>
	)
}
