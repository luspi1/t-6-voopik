import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventLocations: FC = () => {
	return (
		<>
			<Helmet>
				<title>Локации</title>
			</Helmet>
			<h1>Локации</h1>
			<AdminContent>Локации контент</AdminContent>
		</>
	)
}
