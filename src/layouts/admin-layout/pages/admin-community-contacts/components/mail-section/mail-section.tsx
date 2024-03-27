import { type FC } from 'react'

import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'

export const MailSection: FC = () => {
	return (
		<AdminSection
			titleText='Почтовый адрес'
			sectionName='mailSection'
			contentBg='none'
			contentBorder='none'
			contentPadding='7px 0 0'
			switcherText='Включить почтовый адрес'
		>
			<ControlledInput
				className={adminStyles.adminMainInput}
				name='mailAddress'
				label='Введите адрес'
				placeholder='Адрес'
				margin='0'
			/>
		</AdminSection>
	)
}
