import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { BlockquoteSection } from 'src/layouts/main-layout/pages/about-page/layout/about-general/components/blockquote-section/blockquote-section'
import { RenovatedObjectsSection } from 'src/layouts/main-layout/pages/about-page/layout/about-general/components/renovated-objects-section/renovated-objects-section'
import { GallerySection } from 'src/layouts/main-layout/pages/about-page/layout/about-general/components/gallery-section/gallery-section'
import { DescSection } from 'src/layouts/main-layout/pages/about-page/layout/about-general/components/desc-section/desc-section'

import { PageContent } from 'src/components/page-content/page-content'

export const AboutGeneral: FC = () => {
	return (
		<PageContent $padding='30px 73px 25px 30px'>
			<Helmet>
				<title>Об Обществе</title>
			</Helmet>

			<h2>Об Обществе</h2>
			<BlockquoteSection />
			<RenovatedObjectsSection />
			<GallerySection />
			<DescSection />
		</PageContent>
	)
}
