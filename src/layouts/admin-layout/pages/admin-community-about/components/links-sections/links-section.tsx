import { type FC, useEffect } from 'react'
import cn from 'classnames'

import { AdminSectionContent } from 'src/layouts/admin-layout/components/admin-section-content/admin-section-content'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const LinksSection: FC = () => {
	const { control } = useFormContext()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'importantLinks',
	})

	useEffect(() => {
		append({ textLink: '', urlAddress: '' })
	}, [])

	return (
		<section className={adminStyles.adminSection}>
			<div className={adminStyles.adminSectionHead}>
				<h2>Важные ссылки</h2>
			</div>
			<AdminSectionContent>
				<ControlledInput
					className={cn(adminStyles.adminMainInput)}
					name='nameBlockLinks'
					label='Название блока ссылок'
					placeholder='События'
				/>
				<ul className={styles.linksList}>
					{fields?.map((field, idx) => (
						<li key={field.id}>
							<h4>Ссылка {idx + 1}</h4>
							<ControlledInput
								className={cn(adminStyles.adminMainInput)}
								name={`importantLinks.${idx}.textLink`}
								label='Название блока ссылок'
								placeholder='События'
							/>
							<ControlledInput
								className={cn(adminStyles.adminMainInput)}
								name={`importantLinks.${idx}.urlAddress`}
								label='Адрес URL'
								placeholder='Например, www.site.ru'
							/>
							{idx !== 0 && (
								<button type='button' onClick={() => remove(idx)}>
									Удалить ссылку
								</button>
							)}
						</li>
					))}
				</ul>
				<AdminButton
					as='button'
					type='button'
					$outlined
					onClick={() => append({ textLink: '', urlAddress: '' })}
				>
					Добавить еще одну ссылку
				</AdminButton>
			</AdminSectionContent>
		</section>
	)
}
