import { type FC } from 'react'

import { MediakitItem } from '../mediakit-item/mediakit-item'
import { type Document } from 'src/types/document'
import styles from './index.module.scss'

export type DocumentsListProps = {
	listTitle: string
	data: Document[]
	className?: string
}

export const MediakitList: FC<DocumentsListProps> = ({ listTitle, data, className }) => {
	return (
		<div className={className}>
			<h3 className={styles.listTitle}>{listTitle}</h3>

			<ul className={styles.list}>
				{data.map((item) => (
					<li key={item.id}>
						<MediakitItem data={item} />
					</li>
				))}
			</ul>
		</div>
	)
}
