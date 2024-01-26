import { type UserItem } from 'src/types/users'
import { type GroupItem } from 'src/types/groups'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const usersApi = createApi({
	reducerPath: ReducerPath.Users,
	tagTypes: ['Users'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllUsers: build.query<UserItem[], string>({
			query: (search) => ({
				url: `users`,
				params: {
					q: search,
				},
			}),
		}),
		getUserById: build.query<UserItem, string>({
			query: (userId) => ({
				url: `users/${userId}`,
			}),
		}),
		getUserGroup: build.query<GroupItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/group`,
				params: {
					q: search,
				},
			}),
		}),
	}),
})

export const { useGetAllUsersQuery, useGetUserByIdQuery, useGetUserGroupQuery } = usersApi
