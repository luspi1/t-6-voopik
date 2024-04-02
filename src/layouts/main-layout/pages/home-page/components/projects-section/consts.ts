import { type SwiperProps } from 'swiper/react'

import { DisplayBreakpoints } from 'src/helpers/consts'

import slide1 from 'src/assets/img/obj-slide-1.jpg'
import slide2 from 'src/assets/img/obj-slide-2.jpg'
import slide3 from 'src/assets/img/obj-slide-3.jpg'
import slide4 from 'src/assets/img/obj-slide-4.jpg'

export const projectsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: 12,
	grabCursor: true,
	loop: true,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
			spaceBetween: 8,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 4,
		},
	},
}

export const ProjectsSliderItems = [
	{
		title: 'Успенский храм в селе Лыхны, Абхазия',
		img: slide1,
	},
	{
		title: 'Кафедральный Войсковой Вознесенский собор в Новочеркасске',
		img: slide2,
	},
	{
		title: 'Савкина Горка',
		img: slide3,
	},
	{
		title: 'Ограда Фёдоровского городка',
		img: slide4,
	},
	{
		title: 'Успенский храм в селе Лыхны, Абхазия',
		img: slide1,
	},
	{
		title: 'Кафедральный Войсковой Вознесенский собор в Новочеркасске',
		img: slide2,
	},
	{
		title: 'Савкина Горка',
		img: slide3,
	},
	{
		title: 'Ограда Фёдоровского городка',
		img: slide4,
	},
]
