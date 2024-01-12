import { type FC } from 'react'

import { BlockquoteSection } from 'src/pages/about-page/layout/about-general/components/blockquote-section/blockquote-section'
import { RenovatedObjectsSection } from 'src/pages/about-page/layout/about-general/components/renovated-objects-section/renovated-objects-section'
import { GallerySection } from 'src/pages/about-page/layout/about-general/components/gallery-section/gallery-section'

import styles from './index.module.scss'
import { DescSection } from 'src/pages/about-page/layout/about-general/components/desc-section/desc-section'

export const AboutGeneral: FC = () => {
	return (
		<div className={styles.aboutGeneral}>
			<h2>Об Обществе</h2>
			<BlockquoteSection />
			<RenovatedObjectsSection />
			<GallerySection />
			<DescSection />
		</div>
	)
}
