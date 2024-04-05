import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventTickets: FC = () => {
	return (
		<>
			<Helmet>
				<title>Билеты и допуски</title>
			</Helmet>
			<h1>Билеты и допуски</h1>
			<AdminContent>Билеты и допуски контент</AdminContent>
		</>
	)
}
