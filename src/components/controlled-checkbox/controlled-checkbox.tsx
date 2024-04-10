import React, { type FC, useEffect, useState } from 'react'

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
}

export const ControlledCheckbox: FC<ControlledCheckboxProps> = ({
	name,
	type,
	label,
	className,
	required,
	margin,
}) => {
	const [isChecked, setIsChecked] = useState<boolean>(false)

	const {
		register,
		setValue,
		formState: { errors },
		getValues,
	} = useFormContext()

	const handleCheckboxChange = () => {
		setIsChecked((prev) => {
			setValue(name, !prev)
			return !prev
		})
	}

	useEffect(() => {
		setIsChecked(!!getValues(name))
	}, [])

	return (
		<div className={cn(styles.checkboxEl, className)} style={{ margin }}>
			<div className={styles.inputWrapper} onClick={handleCheckboxChange}>
				<label>{isChecked && <CheckMarkSvg />}</label>
				<input
					{...register(name)}
					type={type}
					className={styles.checkboxInput}
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
