import { Container } from 'src/UI/Container/Container'
import { type FC } from 'react'

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'

import { setAdaptiveSliderParams } from 'src/helpers/utils'
import { useDefineDisplay } from 'src/hooks/define-display/define-display'
import { ObjectsSliderItems } from 'src/pages/home-page/components/objects-section/consts'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

export const ObjectsSection: FC = () => {
	const currentDisplayWidth = useDefineDisplay()
	return (
		<section className={styles.objectsSection}>
			<Container>
				<h4>Объекты</h4>
				<CarouselProvider
					className={styles.objectSlider}
					naturalSlideWidth={296}
					naturalSlideHeight={296}
					totalSlides={ObjectsSliderItems.length}
					visibleSlides={setAdaptiveSliderParams(currentDisplayWidth, [4, 4, 3, 1])}
					infinite={true}
				>
					<Slider>
						{ObjectsSliderItems?.map((slideItem, idx) => (
							<Slide innerClassName={styles.slideItem} key={idx} index={idx}>
								<div className={styles.slideImgWrapper}>
									<img src={slideItem.img} alt={slideItem.title} />
								</div>
								<div className={styles.slideTitleWrapper}>
									<a href='#'>{slideItem.title}</a>
								</div>
							</Slide>
						))}
					</Slider>
					<SliderBtns topPosition='50%' leftBtnPosition='-40px' rightBtnPosition='-35px' />
				</CarouselProvider>
				<Link className={styles.allObjLink} to={AppRoute.Objects}>
					Все объекты
				</Link>
			</Container>
		</section>
	)
}
