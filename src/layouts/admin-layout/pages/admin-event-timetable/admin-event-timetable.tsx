import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventTimetable: FC = () => {
	return (
		<>
			<Helmet>
				<title>Расписание</title>
			</Helmet>
			<h1>Расписание</h1>
			<AdminContent>Расписание контент</AdminContent>
		</>
	)
}
