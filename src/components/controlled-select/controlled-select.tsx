import React, { type FC, useState } from 'react'

import Select from 'react-select'
import { type SelOption } from 'src/types/select'

import cn from 'classnames'

import styles from './index.module.scss'

type SelectProps = {
	options: SelOption[]
	name: string
	onChange?: (selectedOption: SelOption | SelOption[] | null) => void
	className?: string
	label?: string
}

export const ControlledSelect: FC<SelectProps> = ({ options, name, label, className }) => {
	const [selectValue, setSelectValue] = useState<SelOption | null>(options?.[0] ?? null)

	return (
		<div className={styles.selectWrapper}>
			{label && <label>{label}</label>}
			<Select
				unstyled
				className={cn(styles.reactSelectContainer, className)}
				classNamePrefix='react-select'
				value={selectValue}
				onChange={setSelectValue}
				options={options}
				defaultValue={options[0]}
				name={name}
			/>
		</div>
	)
}
