import React, { type FC, type ReactNode } from 'react'

import styles from './index.module.scss'
import cn from 'classnames'

export type TableCells = Array<string | ReactNode>

type AddEl = {
	col: number
	el: ReactNode | ReactNode[]
}

type CustomTableProps = {
	colTitles?: ReactNode[]
	cellsData: TableCells[]
	additionalElements?: AddEl[]
	additionalElementsData?: TableCells
}

export const CustomTable: FC<CustomTableProps & React.HTMLAttributes<HTMLTableElement>> = ({
	colTitles,
	cellsData,
	className,
	additionalElements,
	additionalElementsData,
	...props
}) => {
	const copyCellsData = structuredClone(cellsData)

	if (additionalElements && copyCellsData[0]?.length !== colTitles?.length) {
		additionalElements.forEach((addEl) => {
			copyCellsData.forEach((cells, index) => {
				if (Array.isArray(addEl.el)) {
					return cells.splice(addEl.col, 0, addEl.el?.[index])
				} else return cells.splice(addEl.col, 0, addEl.el)
			})
		})
	}

	return (
		<table {...props} className={cn(styles.customTable, className)}>
			{!!colTitles && (
				<thead>
					<tr>
						{colTitles.map((title, idx) => (
							<th key={idx}>{title}</th>
						))}
					</tr>
				</thead>
			)}

			<tbody>
				{copyCellsData?.map((row, rowIdx) => (
					<tr key={rowIdx} data-idx={rowIdx + 1}>
						{row.map((cell, cellIdx) => (
							<td key={cellIdx}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
