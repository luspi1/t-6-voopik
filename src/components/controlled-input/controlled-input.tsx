import React, { type FC, type ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import cn from 'classnames'
import styles from './index.module.scss'
import InputMask from 'react-input-mask'

type ControlledInputProps = {
	mask?: string
	className?: string
	label?: string | ReactNode
	isTextarea?: boolean
	dynamicError?: string | undefined
	name: string
	margin?: string
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>

export const ControlledInput: FC<ControlledInputProps> = ({
	name,
	className,
	mask,
	label,
	dynamicError,
	isTextarea,
	margin,
	...props
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	if (isTextarea) {
		return (
			<div className={cn(styles.inputEl, styles.textareaEl, className)} style={{ margin }}>
				<label className={cn(styles.inputWrapper, styles.textareaWrapper)}>
					{label && <p>{label}</p>}
					<textarea
						{...register(name)}
						{...props}
						className={cn(styles.controlledInput, {
							[styles.noValid]: errors[name],
						})}
					/>
				</label>
				{errors[name] && (
					<p className={styles.warningMessage}>
						<ErrorMessage errors={errors} name={name} />
					</p>
				)}
			</div>
		)
	}

	return (
		<div className={cn(styles.inputEl, className)} style={{ margin }}>
			<label className={styles.inputWrapper}>
				{label && <p>{label}</p>}
				<InputMask
					{...register(name)}
					{...props}
					mask={mask ?? ''}
					className={cn(styles.controlledInput, {
						[styles.noValid]: errors[name],
					})}
				/>
			</label>

			{dynamicError && <p className={styles.warningMessage}>{dynamicError}</p>}
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
