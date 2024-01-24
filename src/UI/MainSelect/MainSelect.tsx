import { type SelOption } from 'src/types/select'

import React, { type FC } from 'react'

import styles from './index.module.scss'
import cn from 'classnames'
import { SelectArrowSvg } from 'src/UI/icons/selectArrowSVG'

type MainSelectProps = {
	items: SelOption[]
	wrapperClassName?: string
}

export const MainSelect: FC<MainSelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({
	items,
	wrapperClassName,
	...props
}) => {
	return (
		<div className={cn(styles.selectWrapper, wrapperClassName)}>
			<select {...props}>
				{items.map((el) => (
					<option key={el.value} value={el.value}>
						{el.label}
					</option>
				))}
			</select>
			<SelectArrowSvg />
		</div>
	)
}
