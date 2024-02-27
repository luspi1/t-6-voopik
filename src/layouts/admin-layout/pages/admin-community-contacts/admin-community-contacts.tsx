import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminCommunityContacts: FC = () => {
	return (
		<>
			<Helmet>
				<title>Контакты и связь</title>
			</Helmet>
			<h1>Контакты и связь</h1>
			<AdminContent>Контакты и связь контент</AdminContent>
		</>
	)
}
