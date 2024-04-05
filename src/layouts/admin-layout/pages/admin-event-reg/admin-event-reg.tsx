import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminEventReg: FC = () => {
	return (
		<>
			<Helmet>
				<title>Регистрация</title>
			</Helmet>
			<h1>Регистрация</h1>
			<AdminContent>Регистрация контент</AdminContent>
		</>
	)
}
