import { type FC } from 'react'
import { PageContent } from 'src/components/page-content/page-content'
import { UsersTable } from 'src/layouts/main-layout/pages/participation-page/layout/users-list/components/users-table/users-table'
import { Pagination } from 'src/components/pagination/pagination'
import { Helmet } from 'react-helmet-async'

export const UsersList: FC = () => {
	return (
		<PageContent $padding='30px 30px 300px 30px'>
			<Helmet>
				<title>Список пользователей</title>
			</Helmet>
			<h2>Список пользователей</h2>
			<UsersTable />
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
