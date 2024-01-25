import { type FC } from 'react'

import { PDFIconSvg } from 'src/UI/icons/pdfIconSVG'
import { DOCIconSvg } from 'src/UI/icons/docIconSVG'
import { type ShortDocument } from 'src/types/document'
import styles from './index.module.scss'

export type DepartmentDocumentsProps = {
	documents?: ShortDocument[]
}

export const DepartmentDocuments: FC<DepartmentDocumentsProps> = ({ documents }) => {
	return (
		<div className={styles.container}>
			<h4>Документы Отделения ({documents?.length ?? 0})</h4>

			{!!documents?.length && (
				<ul className={styles.documentsList}>
					{documents.map((item) => (
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
			)}
		</div>
	)
}
