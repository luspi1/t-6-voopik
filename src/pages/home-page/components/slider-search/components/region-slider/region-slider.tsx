import { type FC } from 'react'
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'

import { RegionSliderItems } from 'src/pages/home-page/components/slider-search/components/region-slider/consts'
import { SlidePrevSvg } from 'src/UI/icons/slidePrevSVG'
import { SlideNextSvg } from 'src/UI/icons/slideNextSVG'
import { useDefineDisplay } from 'src/hooks/define-display/define-display'

import { DisplayBreakpoints } from 'src/helpers/consts'

import styles from './index.module.scss'

export const RegionSlider: FC = () => {
	const currentDisplayWidth = useDefineDisplay()

	const setAdaptiveSliderParams = (displayWidth: number) => {
		if (displayWidth < DisplayBreakpoints.Md) {
			return 2
		}
		if (displayWidth < DisplayBreakpoints.Lg) {
			return 5
		}
		if (displayWidth < DisplayBreakpoints.Xl) {
			return 6
		}
		return 9
	}
	return (
		<CarouselProvider
			className={styles.regionSlider}
			naturalSlideWidth={95}
			naturalSlideHeight={140}
			totalSlides={RegionSliderItems.length}
			visibleSlides={setAdaptiveSliderParams(currentDisplayWidth)}
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
			<ButtonBack className={styles.slideBtnPrev}>
				<SlidePrevSvg />
			</ButtonBack>
			<ButtonNext className={styles.slideBtnNext}>
				<SlideNextSvg />
			</ButtonNext>
		</CarouselProvider>
	)
}
