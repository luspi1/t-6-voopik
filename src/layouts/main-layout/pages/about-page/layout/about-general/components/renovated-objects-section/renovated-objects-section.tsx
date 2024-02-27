import { type FC } from 'react'

import { renovatedObject } from 'src/layouts/main-layout/pages/about-page/layout/about-general/consts'

import styles from './index.module.scss'

export const RenovatedObjectsSection: FC = () => {
	return (
		<section>
			<h4>Объекты культурного наследия, которые отреставрированы за счет средств общества</h4>
			<ul className={styles.linkList}>
				{' '}
				{renovatedObject.map((item) => (
					<li key={item.id}>
						<a href='#'>{item.title}</a>
					</li>
				))}
			</ul>
		</section>
	)
}
