import { type FC } from 'react'

import styles from './index.module.scss'
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import { Container } from 'src/UI/Container/Container'
import { RegionSliderItems } from 'src/pages/home-page/components/slider-search/consts'
export const SliderSearch: FC = () => {
	return (
		<section className={styles.sliderSearchSection}>
			<Container>
				<CarouselProvider
					naturalSlideWidth={90}
					naturalSlideHeight={240}
					totalSlides={RegionSliderItems.length}
					visibleSlides={9}
				>
					<Slider>
						{RegionSliderItems?.map((slideItem, idx) => (
							<Slide key={idx} index={idx}>
								<img src={slideItem.img} alt={slideItem.title} />
								<span>{slideItem.title}</span>
							</Slide>
						))}
					</Slider>
					<ButtonBack>Back</ButtonBack>
					<ButtonNext>Next</ButtonNext>
				</CarouselProvider>
			</Container>
		</section>
	)
}
