import { type FC } from 'react'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'
import { RegionSlider } from 'src/pages/home-page/components/slider-search/components/region-slider/region-slider'
import { SearchWithTags } from 'src/pages/home-page/components/slider-search/components/search-with-tags/search-with-tags'

export const SliderSearch: FC = () => {
	return (
		<section className={styles.sliderSearchSection}>
			<Container>
				<RegionSlider />
				<SearchWithTags />
			</Container>
		</section>
	)
}
