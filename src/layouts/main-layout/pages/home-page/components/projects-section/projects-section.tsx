import { type FC, type RefObject, useRef } from 'react'

import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { Container } from 'src/UI/Container/Container'

import { ProjectsSliderItems, projectsSliderOptions } from './consts'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const ProjectsSection: FC = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<section className={styles.projectsSection}>
			<Container>
				<h4>Проекты</h4>
			</Container>
			<Container $margin='0 auto 28px auto' $width='1300px'>
				<Swiper className={styles.projectSlider} {...projectsSliderOptions} ref={swiperRef}>
					{ProjectsSliderItems?.map((slideItem, idx) => (
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
				<Link className={styles.allProjectsLink} to={AppRoute.Projects}>
					Все проекты
				</Link>
			</Container>
		</section>
	)
}
