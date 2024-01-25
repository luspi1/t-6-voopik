import { type FC } from 'react'
import cn from 'classnames'

import { type RegionItem } from 'src/types/regions'
import { PDFIconSvg } from 'src/UI/icons/pdfIconSVG'
import { DOCIconSvg } from 'src/UI/icons/docIconSVG'
import styles from './index.module.scss'

export type DepartmentDocumentsProps = {
	data: RegionItem
	className?: string
}

export const DepartmentDocuments: FC<DepartmentDocumentsProps> = ({ data, className }) => {
	return (
		<div className={cn(className, styles.container)}>
			<h4>Документы Отделения ({data.documents.length})</h4>

			<ul className={styles.documentsList}>
				{data.documents.map((item) => (
					<li key={item.id}>
						<p>{item.type === 'doc' ? <DOCIconSvg /> : <PDFIconSvg />}</p>
						<div>
							<a href='#' download>
								{item.title}
							</a>
							<p className={styles.documentInfo}>
								{item.type}-файл, {item.size}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
