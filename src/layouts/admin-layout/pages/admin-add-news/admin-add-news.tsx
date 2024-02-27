import { type FC } from 'react'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { Helmet } from 'react-helmet-async'

export const AdminAddNews: FC = () => {
	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<h1>Добавить новость</h1>
			<AdminContent>форма добавления</AdminContent>
		</>
	)
}
