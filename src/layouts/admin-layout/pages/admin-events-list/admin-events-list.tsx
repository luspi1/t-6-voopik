import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Список событий</title>
			</Helmet>
			<h1>Список событий</h1>
			<AdminContent>
				<ul>
					<li>Событие 1</li>
					<li>Событие 2</li>
					<li>Событие 3</li>
					<li>Событие 4</li>
				</ul>
			</AdminContent>
		</>
	)
}
