import { type FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/layout/layout'

import { HomePage } from 'src/pages/home-page/home-page'
import { NotFound } from 'src/pages/not-found/not-found'

import { DepartmentsPage } from 'src/pages/departments-page/departments-page'
import { ObjectsPage } from 'src/pages/objects-page/objects-page'
import { ProjectsPage } from 'src/pages/projects-page/projects-page'
import { ParticipationPage } from 'src/pages/participation-page/participation-page'
import { LibraryPage } from 'src/pages/library-page/library-page'
import { EventsPage } from 'src/pages/events-page/events-page'
import { ShopPage } from 'src/pages/shop-page/shop-page'

import { AboutGeneral } from 'src/pages/about-page/layout/about-general/about-general'
import { AboutLayout } from 'src/pages/about-page/layout/about-layout'
import { AboutHistory } from 'src/pages/about-page/layout/about-history/about-history'
import { AboutDirection } from 'src/pages/about-page/layout/about-direction/about-direction'
import { AboutContacts } from 'src/pages/about-page/layout/about-contacts/about-contacts'
import { AboutDocuments } from 'src/pages/about-page/layout/about-documents/about-documents'
import { AboutMediakit } from 'src/pages/about-page/layout/about-mediakit/about-mediakit'

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

				<Route path={AppRoute.Departments} element={<DepartmentsPage />} />
				<Route path={AppRoute.Objects} element={<ObjectsPage />} />
				<Route path={AppRoute.Projects} element={<ProjectsPage />} />
				<Route path={AppRoute.Participation} element={<ParticipationPage />} />
				<Route path={AppRoute.Library} element={<LibraryPage />} />
				<Route path={AppRoute.Events} element={<EventsPage />} />
				<Route path={AppRoute.Shop} element={<ShopPage />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
