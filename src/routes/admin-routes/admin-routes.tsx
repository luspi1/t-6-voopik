import { type FC } from 'react'
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
import { AdminParticipantsList } from 'src/layouts/admin-layout/pages/admin-participants-list/admin-participants-list'
import { AdminAddParticipant } from 'src/layouts/admin-layout/pages/admin-add-participant/admin-add-participant'
import { AdminObjectsList } from 'src/layouts/admin-layout/pages/admin-objects-list/admin-objects-list'
import { AdminAddObject } from 'src/layouts/admin-layout/pages/admin-add-object/admin-add-object'
import { AdminProjectsList } from 'src/layouts/admin-layout/pages/admin-projects-list/admin-projects-list'
import { AdminAddProject } from 'src/layouts/admin-layout/pages/admin-add-project/admin-add-project'
import { AdminMaterialsList } from 'src/layouts/admin-layout/pages/admin-materials-list/admin-materials-list'
import { AdminAddMaterial } from 'src/layouts/admin-layout/pages/admin-add-material/admin-add-material'
import { AdminProductList } from 'src/layouts/admin-layout/pages/admin-product-list/admin-product-list'
import { AdminSales } from 'src/layouts/admin-layout/pages/admin-sales/admin-sales'
import { AdminSupport } from 'src/layouts/admin-layout/pages/admin-support/admin-support'
import { AdminSettingsHome } from 'src/layouts/admin-layout/pages/admin-settings-home/admin-settings-home'
import { AdminSettingsFeedback } from 'src/layouts/admin-layout/pages/admin-settings-feedback/admin-settings-feedback'
import { AdminSettingsUsers } from 'src/layouts/admin-layout/pages/admin-settings-users/admin-settings-users'
import { AdminSettingsStructure } from 'src/layouts/admin-layout/pages/admin-settings-structure/admin-settings-structure'
import { AdminSettingsBlocks } from 'src/layouts/admin-layout/pages/admin-settings-blocks/admin-settings-blocks'
import { AdminUserProfile } from 'src/layouts/admin-layout/pages/admin-user-profile/admin-user-profile'
import { AdminOrganizerProfile } from 'src/layouts/admin-layout/pages/admin-organizer-profile/admin-organizer-profile'
import { OneEventLayout } from 'src/layouts/admin-layout/pages/one-event-layout/one-event-layout'
import { AdminEventsList } from 'src/layouts/admin-layout/pages/admin-events-list/admin-events-list'
import { AdminEventProfile } from 'src/layouts/admin-layout/pages/one-event-layout/pages/admin-event-profile/admin-event-profile'
import { AdminEventReg } from 'src/layouts/admin-layout/pages/one-event-layout/pages/admin-event-reg/admin-event-reg'
import { AdminEventTickets } from 'src/layouts/admin-layout/pages/one-event-layout/pages/admin-event-tickets/admin-event-tickets'
import { AdminEventContent } from 'src/layouts/admin-layout/pages/one-event-layout/pages/admin-event-content/admin-event-content'
import { AdminEventLocations } from 'src/layouts/admin-layout/pages/one-event-layout/pages/admin-event-locations/admin-event-locations'
import { AdminEventTimetable } from 'src/layouts/admin-layout/pages/one-event-layout/pages/admin-event-timetable/admin-event-timetable'
import { AdminEventRosters } from 'src/layouts/admin-layout/pages/one-event-layout/pages/admin-event-rosters/admin-event-rosters'

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

				<Route path={AdminRoute.AdminParticipantsList} element={<AdminParticipantsList />} />
				<Route path={AdminRoute.AdminAddParticipant} element={<AdminAddParticipant />} />

				<Route path={AdminRoute.AdminObjectsList} element={<AdminObjectsList />} />
				<Route path={AdminRoute.AdminAddObject} element={<AdminAddObject />} />

				<Route path={AdminRoute.AdminProjectsList} element={<AdminProjectsList />} />
				<Route path={AdminRoute.AdminAddProject} element={<AdminAddProject />} />

				<Route path={AdminRoute.AdminEventNew} element={<OneEventLayout />}>
					<Route index path={AdminRoute.AdminEventProfile} element={<AdminEventProfile />} />
					<Route path={AdminRoute.AdminEventReg} element={<AdminEventReg />} />
					<Route path={AdminRoute.AdminEventTickets} element={<AdminEventTickets />} />
					<Route path={AdminRoute.AdminEventContent} element={<AdminEventContent />} />
					<Route path={AdminRoute.AdminEventLocations} element={<AdminEventLocations />} />
					<Route path={AdminRoute.AdminEventTimetable} element={<AdminEventTimetable />} />
					<Route path={AdminRoute.AdminEventRosters} element={<AdminEventRosters />} />
				</Route>
				<Route path={AdminRoute.AdminEventNew} element={<OneEventLayout />} />
				<Route path={AdminRoute.AdminEventsList} element={<AdminEventsList />} />

				<Route path={AdminRoute.AdminMaterialsList} element={<AdminMaterialsList />} />
				<Route path={AdminRoute.AdminAddMaterial} element={<AdminAddMaterial />} />

				<Route path={AdminRoute.AdminProductList} element={<AdminProductList />} />
				<Route path={AdminRoute.AdminSales} element={<AdminSales />} />

				<Route path={AdminRoute.AdminSupport} element={<AdminSupport />} />

				<Route path={AdminRoute.AdminSettingsHome} element={<AdminSettingsHome />} />
				<Route path={AdminRoute.AdminSettingsFeedback} element={<AdminSettingsFeedback />} />
				<Route path={AdminRoute.AdminSettingsUsers} element={<AdminSettingsUsers />} />
				<Route path={AdminRoute.AdminSettingsStructure} element={<AdminSettingsStructure />} />
				<Route path={AdminRoute.AdminSettingsBlocks} element={<AdminSettingsBlocks />} />

				<Route path={AdminRoute.AdminOrganizerProfile} element={<AdminOrganizerProfile />} />

				<Route path={AdminRoute.AdminUserProfile} element={<AdminUserProfile />} />
			</Route>
		</Routes>
	)
}
