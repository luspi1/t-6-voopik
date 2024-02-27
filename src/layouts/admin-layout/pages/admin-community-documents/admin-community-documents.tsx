import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminCommunityDocuments: FC = () => {
	return (
		<>
			<Helmet>
				<title>Документы общества</title>
			</Helmet>
			<h1>Документы общества</h1>
			<AdminContent>Документы общества контент</AdminContent>
		</>
	)
}
