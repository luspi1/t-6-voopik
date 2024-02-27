import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminCommunityHistory: FC = () => {
	return (
		<>
			<Helmet>
				<title>История общества</title>
			</Helmet>
			<h1>История общества</h1>
			<AdminContent>История общества контент</AdminContent>
		</>
	)
}
