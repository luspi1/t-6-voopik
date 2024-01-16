import { type FC, type RefObject, useRef } from 'react'

import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'

import { AppRoute } from 'src/helpers/consts'
import { ObjectsSliderItems, objectsSliderOptions } from './consts'

import styles from './index.module.scss'

export const ObjectsSection: FC = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<section className={styles.objectsSection}>
			<Container>
				<h4>Объекты</h4>
			</Container>
			<Container $margin='0 auto 28px auto' width='1300px'>
				<Swiper className={styles.objectSlider} {...objectsSliderOptions} ref={swiperRef}>
					{ObjectsSliderItems?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<div className={styles.slideItem}>
								<div className={styles.slideImgWrapper}>
									<img src={slideItem.img} alt={slideItem.title} />
								</div>
								<div className={styles.slideTitleWrapper}>
									<a href='#'>{slideItem.title}</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns topPosition='50%' swiperRef={swiperRef} />
			</Container>
			<Container>
				<Link className={styles.allObjLink} to={AppRoute.Objects}>
					Все объекты
				</Link>
			</Container>
		</section>
	)
}
