import { type FC } from 'react'

import { type RegionItem } from 'src/types/regions'

export type DepartmentDocumentsProps = {
	data: RegionItem
	className?: string
}

export const DepartmentDocuments: FC<DepartmentDocumentsProps> = ({ data, className }) => {
	return (
		<div className={className}>
			<h4>Документы Отделения ({data.documents.length})</h4>

			<ul>
				<li>
					<p>icon</p>
					<a href='#' download></a>
					<p>pdf-файл, 68.5 Кбайт</p>
				</li>

				<li>
					<p>icon</p>
					<a href='#' download></a>
					<p>pdf-файл, 68.5 Кбайт</p>
				</li>

				<li>
					<p>icon</p>
					<a href='#' download></a>
					<p>pdf-файл, 68.5 Кбайт</p>
				</li>
			</ul>
		</div>
	)
}
