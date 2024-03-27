import { type FC } from 'react'

import cn from 'classnames'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const CharterSection: FC = () => {
	return (
		<AdminSection titleText='Устав организации'>
			<ControlledInput
				className={adminStyles.adminMainInput}
				name='charterName'
				label='Название документа'
				placeholder='Название'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				className={cn(adminStyles.adminMainInput, styles.charterTextarea)}
				name='charterDescription'
				label='Короткое описание'
				placeholder='Поле ввода текста'
				margin='0 0 20px 0'
				isTextarea
			/>
			<ControlledInput
				className={cn(adminStyles.adminMainInput, styles.versionInput)}
				name='charterVersion'
				label='Номер версии'
				mask='999999999999999'
				maskPlaceholder=''
				placeholder='Номер версии'
				margin='0 0 20px 0'
			/>
		</AdminSection>
	)
}
