import { type FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/layout/layout'

import { HomePage } from 'src/pages/home-page/home-page'
import { NotFound } from 'src/pages/not-found/not-found'

import { ObjectsPage } from 'src/pages/objects-page/objects-page'
import { ProjectsPage } from 'src/pages/projects-page/projects-page'
import { LibraryPage } from 'src/pages/library-page/library-page'
import { EventsPage } from 'src/pages/events-page/events-page'
import { ShopPage } from 'src/pages/shop-page/shop-page'

import { AboutLayout } from 'src/pages/about-page/layout/about-layout'
import { AboutGeneral } from 'src/pages/about-page/layout/about-general/about-general'
import { AboutHistory } from 'src/pages/about-page/layout/about-history/about-history'
import { AboutDirection } from 'src/pages/about-page/layout/about-direction/about-direction'
import { AboutContacts } from 'src/pages/about-page/layout/about-contacts/about-contacts'
import { AboutDocuments } from 'src/pages/about-page/layout/about-documents/about-documents'
import { AboutMediakit } from 'src/pages/about-page/layout/about-mediakit/about-mediakit'

import { ParticipationLayout } from 'src/pages/participation-page/layout/participation-layout'
import { UserDetailsLayout } from 'src/pages/participation-page/layout/user-details/layout/user-details-layout'
import { UserDetails } from 'src/pages/participation-page/layout/user-details/layout/user-details/user-details'
import { UserGroups } from 'src/pages/participation-page/layout/user-details/layout/user-groups/user-groups'
import { UserEvents } from 'src/pages/participation-page/layout/user-details/layout/user-events/user-events'
import { UserProjects } from 'src/pages/participation-page/layout/user-details/layout/user-projects/user-projects'
import { UserObjects } from 'src/pages/participation-page/layout/user-details/layout/user-objects/user-objects'
import { UserGallery } from 'src/pages/participation-page/layout/user-details/layout/user-gallery/user-gallery'

import { DepartmentsLayout } from 'src/pages/departments-page/layout/departments-layout'
import { DepartmentsList } from 'src/pages/departments-page/layout/departments-list/departments-list'
import { DepartmentsAbout } from 'src/pages/departments-page/layout/departments-about/departments-about'
import { DepartmentsDetailsInfo } from 'src/pages/departments-page/layout/departments-details-info/departments-details-info'
import { UsersList } from 'src/pages/participation-page/layout/users-list/users-list'

export const App: FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />
				<Route path={AppRoute.About} element={<AboutLayout />}>
					<Route index element={<AboutGeneral />} />
					<Route path={AppRoute.AboutHistory} element={<AboutHistory />} />
					<Route path={AppRoute.AboutDirection} element={<AboutDirection />} />
					<Route path={AppRoute.AboutContacts} element={<AboutContacts />} />
					<Route path={AppRoute.AboutDocuments} element={<AboutDocuments />} />
					<Route path={AppRoute.AboutMediakit} element={<AboutMediakit />} />
				</Route>

				<Route path={AppRoute.Departments} element={<DepartmentsLayout />}>
					<Route index element={<DepartmentsList />} />
					<Route path={AppRoute.DepartmentsAbout} element={<DepartmentsAbout />} />
					<Route path={AppRoute.DepartmentsDetailsInfo} element={<DepartmentsDetailsInfo />} />
				</Route>

				<Route path={AppRoute.Users} element={<ParticipationLayout />}>
					<Route index element={<UsersList />} />
					<Route path=':id' element={<UserDetailsLayout />}>
						<Route path={AppRoute.UserInfo} element={<UserDetails />} />
						<Route path={AppRoute.UserGroups} element={<UserGroups />} />
						<Route path={AppRoute.UserEvents} element={<UserEvents />} />
						<Route path={AppRoute.UserProjects} element={<UserProjects />} />
						<Route path={AppRoute.UserObjects} element={<UserObjects />} />
						<Route path={AppRoute.UserGallery} element={<UserGallery />} />
					</Route>
				</Route>

				<Route path={AppRoute.Objects} element={<ObjectsPage />} />
				<Route path={AppRoute.Projects} element={<ProjectsPage />} />
				<Route path={AppRoute.Library} element={<LibraryPage />} />
				<Route path={AppRoute.Events} element={<EventsPage />} />
				<Route path={AppRoute.Shop} element={<ShopPage />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
