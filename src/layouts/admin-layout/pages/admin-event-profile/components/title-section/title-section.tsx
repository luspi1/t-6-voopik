import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'

export const TitleSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<ControlledInput
				className={adminStyles.adminMainInput}
				name='eventName'
				label='Название события *'
				placeholder='Полное название события'
				margin='0 0 15px 0'
			/>
		</AdminSection>
	)
}
