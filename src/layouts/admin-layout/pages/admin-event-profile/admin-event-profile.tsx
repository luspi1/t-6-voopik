import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventProfile: FC = () => {
	return (
		<>
			<Helmet>
				<title>Профиль события</title>
			</Helmet>
			<h1>Профиль события</h1>
			<AdminContent>Профиль события контент</AdminContent>
		</>
	)
}
