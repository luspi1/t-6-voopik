import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { ChairmansSection } from './components/chairmans-section/chairmans-section'
import { ViceChairmansSection } from './components/vice-chairman-section/vice-chairman-section'
import { DirectionLinksSection } from './components/direction-links-section/direction-links-section'
import styles from './index.module.scss'
import { PageContent } from 'src/components/page-content/page-content'

export const AboutDirection: FC = () => {
	return (
		<div className={styles.aboutDirection}>
			<PageContent $padding='30px 50px 200px 30px'>
				<Helmet>
					<title>Об Обществе – Правление Общества</title>
				</Helmet>

				<h2>Правление Общества</h2>
				<ChairmansSection />
				<ViceChairmansSection />
				<DirectionLinksSection />
			</PageContent>
		</div>
	)
}
