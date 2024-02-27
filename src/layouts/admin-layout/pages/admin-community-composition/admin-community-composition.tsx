import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminCommunityComposition: FC = () => {
	return (
		<>
			<Helmet>
				<title>Состав правления</title>
			</Helmet>
			<h1>Состав правления</h1>
			<AdminContent>Состав правления контент</AdminContent>
		</>
	)
}
