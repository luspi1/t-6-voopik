import React, { type FC } from 'react'

import { useFormContext, Controller } from 'react-hook-form'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ErrorMessage } from '@hookform/error-message'
import ru from 'date-fns/locale/ru'
import cn from 'classnames'

import styles from './index.module.scss'

registerLocale('ru', ru)

type ControlledDateInputProps = {
	className?: string
	label?: string
	name: string
	dateFormat?: string
	showTimeSelect?: boolean
	showTimeSelectOnly?: boolean
	timeFormat?: string
	placeholder?: string
	margin?: string
}
export const ControlledDateInput: FC<ControlledDateInputProps> = ({
	name,
	className,
	label,
	dateFormat,
	showTimeSelect,
	showTimeSelectOnly,
	timeFormat,
	placeholder,
	margin,
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()

	return (
		<div className={cn(styles.dateInputWrapper, className)} style={{ margin }}>
			<label>
				{label && <p>{label}</p>}
				<Controller
					control={control}
					name={name}
					render={({ field }) => (
						<DatePicker
							{...field}
							locale='ru'
							selected={field.value ? new Date(field.value as string) : null}
							onChange={(date) => field.onChange(date)}
							dateFormat={dateFormat ?? 'dd-MM-yyyy'}
							timeFormat={timeFormat ?? 'HH:mm'}
							timeIntervals={15}
							timeCaption='Время'
							placeholderText={placeholder}
							showTimeSelect={showTimeSelect ?? false}
							showTimeSelectOnly={showTimeSelectOnly}
						/>
					)}
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
