import { type FC, useEffect } from 'react'
import { type ContactsInputs } from 'src/layouts/admin-layout/pages/admin-community-contacts/schema'

import cn from 'classnames'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const PhoneSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<ContactsInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'phoneNumbers',
	})

	useEffect(() => {
		append({ phoneOwner: '', phoneAddress: '', phoneNumber: '' }, { shouldFocus: false })
	}, [])

	return (
		<AdminSection
			titleText='Телефоны'
			sectionName='phonesSection'
			switcherText='Включить блок телефонов'
		>
			<ul className={styles.phonesList}>
				{fields?.map((field, idx) => (
					<li key={field.id}>
						<h4>Телефон {idx + 1}</h4>
						<ControlledInput
							className={cn(adminStyles.adminMainInput)}
							name={`phoneNumbers.${idx}.phoneOwner`}
							dynamicError={errors?.phoneNumbers?.[idx]?.phoneOwner}
							label='Чей номер'
							placeholder='Например, приемная'
							margin='0 0 10px 0'
						/>
						<ControlledInput
							className={cn(adminStyles.adminMainInput)}
							name={`phoneNumbers.${idx}.phoneAddress`}
							dynamicError={errors?.phoneNumbers?.[idx]?.phoneAddress}
							label='Адрес'
							placeholder='Адрес'
							margin='0 0 10px 0'
						/>
						<ControlledInput
							className={cn(adminStyles.adminMainInput)}
							name={`phoneNumbers.${idx}.phoneNumber`}
							dynamicError={errors.phoneNumbers?.[idx]?.phoneNumber}
							label='Номер телефона'
							mask='9 (999) 999-99-99'
							placeholder='_ (___) ___-__-__'
							margin='0'
						/>
						{idx !== 0 && (
							<button type='button' onClick={() => remove(idx)}>
								Удалить номер
							</button>
						)}
					</li>
				))}
			</ul>
			<AdminButton
				className={styles.addPhoneBtn}
				as='button'
				type='button'
				$outlined
				$padding='10px 14px'
				onClick={() =>
					append(
						{
							phoneOwner: '',
							phoneAddress: '',
							phoneNumber: '',
						},
						{ shouldFocus: false },
					)
				}
			>
				Добавить еще один номер
			</AdminButton>
		</AdminSection>
	)
}
