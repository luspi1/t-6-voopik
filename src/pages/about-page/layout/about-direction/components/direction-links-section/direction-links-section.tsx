import { type FC } from 'react'
import styles from '../../index.module.scss'

export const DirectionLinksSection: FC = () => {
	return (
		<div className={styles.directionLinks}>
			<div>
				<h3>Президиум</h3>
				<a href='#'>Состав Президиума Центрального совета ВООПИиК</a>
			</div>

			<div>
				<h3>Центральный совет</h3>
				<a href='#'>Состав Центрального совета ВООПИиК</a>
			</div>
			<div>
				<h3>Центральная ревизионная комиссия</h3>
				<a href='#'>Состав Центральной ревизионной комиссии ВООПИиК</a>
			</div>
		</div>
	)
}