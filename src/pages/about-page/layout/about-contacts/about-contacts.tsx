import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { ContactsMap } from 'src/components/contacts-map/contacts-map'
import { ContactsInfo } from './components/contacts-info/contacts-info'

import styles from './index.module.scss'
import { PageContent } from 'src/components/page-content/page-content'
export const AboutContacts: FC = () => {
	return (
		<PageContent $padding='30px 50px 35px 30px'>
			<Helmet>
				<title>Об Обществе – Контакты и связь</title>
			</Helmet>
			<h2>Контакты и связь</h2>
			<ContactsMap className={styles.aboutMap} points={[55.745032, 37.599139]} zoom={17} />
			<ContactsInfo />
		</PageContent>
	)
}
