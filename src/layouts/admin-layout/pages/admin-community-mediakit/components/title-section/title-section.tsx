import { type FC } from 'react'

import cn from 'classnames'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import mediaStyles from 'src/layouts/admin-layout/pages/admin-community-mediakit/index.module.scss'
export const TitleSection: FC = () => {
	return (
		<AdminSection
			titleText='Заглавный текст'
			contentBg='none'
			contentPadding='0'
			contentBorder='none'
		>
			<ControlledInput
				className={cn(adminStyles.adminMainInput, mediaStyles.mediaTextarea)}
				name='titleText'
				label='Заглавный текст'
				margin='0'
				isTextarea
			/>
		</AdminSection>
	)
}
