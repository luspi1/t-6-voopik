import styles from './index.module.scss'
import { CustomText } from 'src/components/custom-text/custom-text'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

export const PreviewSection = () => {
	return (
		<section>
			<ul className={styles.previewSectionList}>
				<li>
					<CustomText $margin='0 0 4px 0' $fontWeight='600'>
						Логотип *
					</CustomText>
					<CustomText $margin='0 0 12px 0'>
						соотношение сторон 1:1 или 1:2, JPEG, PNG, SVG
					</CustomText>
					<ReactDropzone
						name='contentLogo'
						prompt='Перетащите изображение на это поле'
						accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
					/>
				</li>
			</ul>
		</section>
	)
}
