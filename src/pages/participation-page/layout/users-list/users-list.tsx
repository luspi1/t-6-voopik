import { type FC } from 'react'
import { PageContent } from 'src/components/page-content/page-content'
import { UsersTable } from 'src/pages/participation-page/layout/users-list/components/users-table/users-table'
import { Pagination } from 'src/components/pagination/pagination'

export const UsersList: FC = () => {
	return (
		<PageContent $padding='30px 30px 300px 30px'>
			<h2>Список пользователей</h2>
			<UsersTable />
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
