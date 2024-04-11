import React, { type FC, useEffect } from 'react'

import { useFormContext } from 'react-hook-form'
import cn from 'classnames'
import { ErrorMessage } from '@hookform/error-message'

import { CheckMarkSvg } from 'src/UI/icons/checkMarkSVG'

import styles from './index.module.scss'

type ControlledCheckboxProps = {
	name: string
	type: 'checkbox' | 'radio'
	required?: boolean
	label?: string
	className?: string
	margin?: string
	disabled?: boolean
}

export const ControlledCheckbox: FC<ControlledCheckboxProps> = ({
	name,
	type,
	label,
	className,
	required,
	margin,
	disabled,
}) => {
	const {
		register,
		setValue,
		watch,
		formState: { errors },
	} = useFormContext()

	const handleCheckboxChange = () => {
		setValue(name, !watch(name))
	}

	useEffect(() => {
		if (disabled) {
			setValue(name, false)
		}
	}, [disabled])

	return (
		<div className={cn(styles.checkboxEl, className)} style={{ margin }}>
			<div
				className={cn(styles.inputWrapper, { [styles._disabled]: disabled })}
				onClick={handleCheckboxChange}
			>
				<label>{watch(name) && <CheckMarkSvg />}</label>
				<input
					{...register(name)}
					className={styles.checkboxInput}
					type={type}
					required={required}
				/>
				{label && <p>{label}</p>}
			</div>

			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
