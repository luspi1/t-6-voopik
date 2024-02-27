import { Route, Routes } from 'react-router-dom'

import { AdminRoute } from 'src/routes/admin-routes/consts'

import { AdminLayout } from 'src/layouts/admin-layout/admin-layout'
import { AdminNewsList } from 'src/layouts/admin-layout/pages/admin-news-list/admin-news-list'
import { AdminAddNews } from 'src/layouts/admin-layout/pages/admin-add-news/admin-add-news'
import { AdminCommunityAbout } from 'src/layouts/admin-layout/pages/admin-community-about/admin-community-about'
import { AdminCommunityHistory } from 'src/layouts/admin-layout/pages/admin-community-history/admin-community-history'
import { AdminCommunityComposition } from 'src/layouts/admin-layout/pages/admin-community-composition/admin-community-composition'
import { AdminCommunityContacts } from 'src/layouts/admin-layout/pages/admin-community-contacts/admin-community-contacts'
import { AdminCommunityDocuments } from 'src/layouts/admin-layout/pages/admin-community-documents/admin-community-documents'
import { AdminCommunityMediakit } from 'src/layouts/admin-layout/pages/admin-community-mediakit/admin-community-mediakit'
import { AdminCommunityPhotos } from 'src/layouts/admin-layout/pages/admin-community-photos/admin-community-photos'
import { AdminDepartmentsList } from 'src/layouts/admin-layout/pages/admin-departments-list/admin-departments-list'
import { AdminAddDepartments } from 'src/layouts/admin-layout/pages/admin-add-departments/admin-add-departments'
import { AdminSupport } from 'src/layouts/admin-layout/pages/admin-support/admin-support'
import { type FC } from 'react'

export const AdminRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<AdminLayout />}>
				<Route path={AdminRoute.AdminNewsList} element={<AdminNewsList />} />
				<Route path={AdminRoute.AdminAddNews} element={<AdminAddNews />} />
				<Route path={AdminRoute.AdminCommunityAbout} element={<AdminCommunityAbout />} />
				<Route path={AdminRoute.AdminCommunityHistory} element={<AdminCommunityHistory />} />
				<Route
					path={AdminRoute.AdminCommunityComposition}
					element={<AdminCommunityComposition />}
				/>
				<Route path={AdminRoute.AdminCommunityContacts} element={<AdminCommunityContacts />} />
				<Route path={AdminRoute.AdminCommunityDocuments} element={<AdminCommunityDocuments />} />
				<Route path={AdminRoute.AdminCommunityMediakit} element={<AdminCommunityMediakit />} />
				<Route path={AdminRoute.AdminCommunityPhotos} element={<AdminCommunityPhotos />} />
				<Route path={AdminRoute.AdminDepartmentsList} element={<AdminDepartmentsList />} />
				<Route path={AdminRoute.AdminAddDepartments} element={<AdminAddDepartments />} />
				<Route path={AdminRoute.AdminSupport} element={<AdminSupport />} />
			</Route>
		</Routes>
	)
}
