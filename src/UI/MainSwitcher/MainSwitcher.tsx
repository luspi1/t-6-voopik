import React, { type FC } from 'react'
import cn from 'classnames'
import { useController, useFormContext } from 'react-hook-form'

import styles from './index.module.scss'

type MainSwitcherProps = {
	name: string
	label?: string
	className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const MainSwitcher: FC<MainSwitcherProps> = ({ label, name, className, ...props }) => {
	const { register, getValues, control, setValue } = useFormContext()

	useController({
		name,
		control,
		defaultValue: true,
	})

	const handleCheckboxChange = () => {
		setValue(name, !getValues(name))
	}

	return (
		<div
			className={cn(className, styles.mainSwitcher, { [styles.activeSwitcher]: getValues(name) })}
			onClick={handleCheckboxChange}
		>
			<p>{label}</p>
			<input {...register(name)} {...props} type='checkbox' />
			<label></label>
		</div>
	)
}
