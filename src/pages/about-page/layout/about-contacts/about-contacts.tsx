import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { ContactMap } from './components/contacts-map/contacts-map'
import { ContactsInfo } from './components/contacts-info/contacts-info'

export const AboutContacts: FC = () => {
	return (
		<>
			<Helmet>
				<title>Об Обществе – Контакты и связь</title>
			</Helmet>
			<h2>Контакты и связь</h2>
			<ContactMap />
			<ContactsInfo />
		</>
	)
}
