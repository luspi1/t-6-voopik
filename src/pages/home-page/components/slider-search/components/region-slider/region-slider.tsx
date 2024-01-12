import { type FC } from 'react'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'

import { RegionSliderItems } from 'src/pages/home-page/components/slider-search/components/region-slider/consts'
import { useDefineDisplay } from 'src/hooks/define-display/define-display'

import styles from './index.module.scss'
import { setAdaptiveSliderParams } from 'src/helpers/utils'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'

export const RegionSlider: FC = () => {
	const currentDisplayWidth = useDefineDisplay()

	return (
		<CarouselProvider
			className={styles.regionSlider}
			naturalSlideWidth={95}
			naturalSlideHeight={140}
			totalSlides={RegionSliderItems.length}
			visibleSlides={setAdaptiveSliderParams(currentDisplayWidth, [9, 6, 4, 2])}
			infinite={true}
		>
			<Slider>
				{RegionSliderItems?.map((slideItem, idx) => (
					<Slide innerClassName={styles.slideItem} key={idx} index={idx}>
						<img src={slideItem.img} alt={slideItem.title} />
						<span>{slideItem.title}</span>
					</Slide>
				))}
			</Slider>
			<SliderBtns topPosition='48px' leftBtnPosition='-15px' rightBtnPosition='-15px' />
		</CarouselProvider>
	)
}
