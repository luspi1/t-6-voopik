import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		// [NameSpace.Tasks]: tasksReducer,
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware({ serializableCheck: false }).concat(tasksApi.middleware),
})

setupListeners(store.dispatch)
