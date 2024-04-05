import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventContent: FC = () => {
	return (
		<>
			<Helmet>
				<title>Контент</title>
			</Helmet>
			<h1>Контент</h1>
			<AdminContent>Контент</AdminContent>
		</>
	)
}
