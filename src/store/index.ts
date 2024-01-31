import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { breadCrumbsReducer } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { usersApi } from 'src/store/users/users.api'
import { regionsApi } from 'src/store/regions/regions.api'
import { objectsApi } from 'src/store/objects/objects.api'
import { projectsApi } from 'src/store/projects/projects.api'

import { NameSpace } from 'src/helpers/consts'

export const store = configureStore({
	reducer: {
		[NameSpace.BreadCrumbs]: breadCrumbsReducer,
		[regionsApi.reducerPath]: regionsApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[objectsApi.reducerPath]: objectsApi.reducer,
		[projectsApi.reducerPath]: projectsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false })
			.concat(regionsApi.middleware)
			.concat(usersApi.middleware)
			.concat(objectsApi.middleware)
			.concat(projectsApi.middleware),
})

setupListeners(store.dispatch)
