import { type FC } from 'react'

import { ButtonBack, ButtonNext } from 'pure-react-carousel'

import { SlidePrevSvg } from 'src/UI/icons/slidePrevSVG'
import { SlideNextSvg } from 'src/UI/icons/slideNextSVG'

import styles from './index.module.scss'

type SliderBtnsProps = {
	topPosition?: string
	leftBtnPosition?: string
	rightBtnPosition?: string
}

export const SliderBtns: FC<SliderBtnsProps> = ({
	topPosition,
	leftBtnPosition,
	rightBtnPosition,
}) => {
	return (
		<>
			<ButtonBack
				className={styles.slideBtnPrev}
				style={{
					top: topPosition ?? '0',
					left: leftBtnPosition ?? '0',
				}}
			>
				<SlidePrevSvg />
			</ButtonBack>
			<ButtonNext
				className={styles.slideBtnNext}
				style={{
					top: topPosition ?? '0',
					right: rightBtnPosition ?? '0',
				}}
			>
				<SlideNextSvg />
			</ButtonNext>
		</>
	)
}
