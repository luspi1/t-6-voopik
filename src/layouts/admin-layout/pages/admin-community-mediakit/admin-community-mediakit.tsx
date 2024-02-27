import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminCommunityMediakit: FC = () => {
	return (
		<>
			<Helmet>
				<title>Медиакит</title>
			</Helmet>
			<h1>Медиакит</h1>
			<AdminContent>Медиакит контент</AdminContent>
		</>
	)
}
