import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminAddEvent: FC = () => {
	return (
		<>
			<Helmet>
				<title>Добавить событие</title>
			</Helmet>
			<h1>Добавить событие</h1>
			<AdminContent>Добавить событие контент</AdminContent>
		</>
	)
}
