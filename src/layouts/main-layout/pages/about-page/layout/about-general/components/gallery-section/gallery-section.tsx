import { type FC } from 'react'

import { galleryContent } from 'src/layouts/main-layout/pages/about-page/layout/about-general/consts'

import styles from './index.module.scss'

export const GallerySection: FC = () => {
	return (
		<section>
			<h4>Фотогалерея</h4>
			<ul className={styles.gallery}>
				{' '}
				{galleryContent.map((item) => (
					<li key={item.id}>
						<figure className={styles.image}>
							<img src={item.imgTitle} alt={item.imgDescription} />
							<figcaption>{item.imgDescription}</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</section>
	)
}
