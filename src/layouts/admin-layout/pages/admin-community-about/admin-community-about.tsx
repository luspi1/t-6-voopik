import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminCommunityAbout: FC = () => {
	return (
		<>
			<Helmet>
				<title>Об обществе</title>
			</Helmet>
			<h1>Об обществе</h1>
			<AdminContent>Об обществе контент</AdminContent>
		</>
	)
}
