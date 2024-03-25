import React, { type FC, useRef } from 'react'
import cn from 'classnames'
import { useController, useFormContext } from 'react-hook-form'

import styles from './index.module.scss'

type AdminSwitcherProps = {
	name: string
	label?: string
	className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const AdminSwitcher: FC<AdminSwitcherProps> = ({ label, name, className, ...props }) => {
	const { register, getValues, control, setValue, resetField } = useFormContext()

	useController({
		name,
		control,
		defaultValue: true,
	})

	const switcherRef = useRef<HTMLDivElement>(null)
	const handleCheckboxChange = () => {
		setValue(name, !getValues(name))
		const sectionInputs = switcherRef.current
			?.closest('section')
			?.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>
		if (sectionInputs && !getValues(name)) {
			sectionInputs.forEach((inputEl) => {
				if (inputEl.name === name) return
				resetField(inputEl.name)
			})
		}
	}

	return (
		<div
			className={cn(className, styles.adminSwitcher, { [styles.activeSwitcher]: getValues(name) })}
			ref={switcherRef}
			onClick={handleCheckboxChange}
		>
			<p>{label}</p>
			<input {...register(name)} {...props} type='checkbox' />
			<label></label>
		</div>
	)
}
