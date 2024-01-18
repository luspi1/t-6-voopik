import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { regionsApi } from 'src/store/regions/regions.api'

export const store = configureStore({
	reducer: {
		[regionsApi.reducerPath]: regionsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(regionsApi.middleware),
})

setupListeners(store.dispatch)
