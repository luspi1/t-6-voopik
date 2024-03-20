import { type FC } from 'react'
import cn from 'classnames'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminSectionContent } from 'src/layouts/admin-layout/components/admin-section-content/admin-section-content'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const TitleSection: FC = () => {
	return (
		<section className={adminStyles.adminSection}>
			<h2>Заглавный эпиграф</h2>
			<AdminSectionContent>
				<ReactDropzone
					className={styles.titleDropzone}
					label='Фотография'
					name='aboutTitleImage'
					prompt='Перетащите изображение на это поле'
					accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				/>
				<ControlledInput
					className={cn(adminStyles.adminMainInput, styles.titleInput)}
					name='epigraphText'
					label='Текст эпиграфа'
					margin='0 0 15px 0'
					isTextarea
				/>
				<ControlledInput
					className={cn(adminStyles.adminMainInput, styles.titleInput)}
					name='epigraphSign'
					label='Подпись автора эпиграфа'
					placeholder='Подпись'
					margin='0'
				/>
			</AdminSectionContent>
		</section>
	)
}
