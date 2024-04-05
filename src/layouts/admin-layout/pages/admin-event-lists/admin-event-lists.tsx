import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventLists: FC = () => {
	return (
		<>
			<Helmet>
				<title>Списки</title>
			</Helmet>
			<h1>Списки</h1>
			<AdminContent>Списки контент</AdminContent>
		</>
	)
}
