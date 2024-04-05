import { Route, Routes } from 'react-router-dom'

import { MainLayout } from 'src/layouts/main-layout/main-layout'
import { HomePage } from 'src/layouts/main-layout/pages/home-page/home-page'
import { AboutLayout } from 'src/layouts/main-layout/pages/about-page/layout/about-layout'
import { AboutGeneral } from 'src/layouts/main-layout/pages/about-page/layout/about-general/about-general'
import { AboutHistory } from 'src/layouts/main-layout/pages/about-page/layout/about-history/about-history'
import { AboutDirection } from 'src/layouts/main-layout/pages/about-page/layout/about-direction/about-direction'
import { AboutContacts } from 'src/layouts/main-layout/pages/about-page/layout/about-contacts/about-contacts'
import { AboutDocuments } from 'src/layouts/main-layout/pages/about-page/layout/about-documents/about-documents'
import { AboutMediakit } from 'src/layouts/main-layout/pages/about-page/layout/about-mediakit/about-mediakit'
import { DepartmentsLayout } from 'src/layouts/main-layout/pages/departments-page/layout/departments-layout'
import { DepartmentsList } from 'src/layouts/main-layout/pages/departments-page/layout/departments-list/departments-list'
import { DepartmentsAbout } from 'src/layouts/main-layout/pages/departments-page/layout/departments-about/departments-about'
import { DepartmentDetailsLayout } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/department-details-layout'
import { RegDetailsInfo } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-info/reg-details-info'
import { RegDetailsParticipants } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-participants/reg-details-participants'
import { RegDetailsEvents } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-events/reg-details-events'
import { RegDetailsObjects } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-objects/reg-details-objects'
import { RegDetailsProjects } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-projects/reg-details-projects'
import { RegDetailsGallery } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-gallery/reg-details-gallery'
import { ParticipationLayout } from 'src/layouts/main-layout/pages/participation-page/layout/participation-layout'
import { UsersList } from 'src/layouts/main-layout/pages/participation-page/layout/users-list/users-list'
import { UserDetailsLayout } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-details-layout'
import { UserDetails } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-details/user-details'
import { UserGroups } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-groups/user-groups'
import { UserEvents } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-events/user-events'
import { UserProjects } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-projects/user-projects'
import { UserObjects } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-objects/user-objects'
import { UserGallery } from 'src/layouts/main-layout/pages/participation-page/layout/user-details/layout/user-gallery/user-gallery'
import { ObjectsLayout } from 'src/layouts/main-layout/pages/objects-page/layout/objects-layout'
import { ObjectsList } from 'src/layouts/main-layout/pages/objects-page/layout/objects-list/objects-list'
import { ObjectsAbout } from 'src/layouts/main-layout/pages/objects-page/layout/objects-about/objects-about'
import { ObjectDetails } from 'src/layouts/main-layout/pages/objects-page/layout/object-details/object-details'
import { ProjectsLayout } from 'src/layouts/main-layout/pages/projects-page/layout/projects-layout'
import { ProjectsList } from 'src/layouts/main-layout/pages/projects-page/layout/projects-list/projects-list'
import { ProjectsAbout } from 'src/layouts/main-layout/pages/projects-page/layout/projects-about/projects-about'
import { ProjectDetails } from 'src/layouts/main-layout/pages/projects-page/layout/project-details/project-details'
import { LibraryPage } from 'src/layouts/main-layout/pages/library-page/library-page'
import { EventsLayout } from 'src/layouts/main-layout/pages/events-page/events-layout'
import { ShopPage } from 'src/layouts/main-layout/pages/shop-page/shop-page'
import { AppRoute } from 'src/routes/main-routes/consts'
import { NewsLayout } from 'src/layouts/main-layout/pages/news-page/layout/news-layout'
import { NewsList } from 'src/layouts/main-layout/pages/news-page/layout/news-list/news-list'
import { NewsDetails } from 'src/layouts/main-layout/pages/news-page/layout/news-details/news-details'
import { EventsList } from 'src/layouts/main-layout/pages/events-page/layout/events-list/events-list'
import { EventDetails } from 'src/layouts/main-layout/pages/events-page/layout/events-details/event-details'

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<MainLayout />}>
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
					<Route path=':id' element={<DepartmentDetailsLayout />}>
						<Route path={AppRoute.DepartmentsDetailsInfo} element={<RegDetailsInfo />} />
						<Route
							path={AppRoute.DepartmentsDetailsParticipant}
							element={<RegDetailsParticipants />}
						/>
						<Route path={AppRoute.DepartmentsDetailsEvents} element={<RegDetailsEvents />} />
						<Route path={AppRoute.DepartmentsDetailsObjects} element={<RegDetailsObjects />} />
						<Route path={AppRoute.DepartmentsDetailsProjects} element={<RegDetailsProjects />} />
						<Route path={AppRoute.DepartmentsDetailsGallery} element={<RegDetailsGallery />} />
					</Route>
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

				<Route path={AppRoute.Objects} element={<ObjectsLayout />}>
					<Route index element={<ObjectsList />} />
					<Route path={AppRoute.ObjectsAbout} element={<ObjectsAbout />} />
					<Route path=':id' element={<ObjectDetails />} />
				</Route>
				<Route path={AppRoute.Projects} element={<ProjectsLayout />}>
					<Route index element={<ProjectsList />} />
					<Route path={AppRoute.ProjectsAbout} element={<ProjectsAbout />} />
					<Route path=':id' element={<ProjectDetails />} />
				</Route>
				<Route path={AppRoute.News} element={<NewsLayout />}>
					<Route index element={<NewsList />} />
					<Route path=':id' element={<NewsDetails />} />
				</Route>
				<Route path={AppRoute.Events} element={<EventsLayout />}>
					<Route index element={<EventsList />} />
					<Route path=':id' element={<EventDetails />} />
				</Route>
				<Route path={AppRoute.Library} element={<LibraryPage />} />
				<Route path={AppRoute.Shop} element={<ShopPage />} />
			</Route>
		</Routes>
	)
}
