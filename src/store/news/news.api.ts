import { type NewsItem } from 'src/types/news'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const newsApi = createApi({
	reducerPath: ReducerPath.News,
	tagTypes: ['News'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllNews: build.query<NewsItem[], string>({
			query: (search) => ({
				url: `news`,
				params: {
					q: search,
				},
			}),
			providesTags: ['News'],
		}),
		deleteNewsById: build.mutation<null, string>({
			query: (newsId) => ({
				url: `newsDelete/${newsId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['News'],
		}),
	}),
})

export const { useGetAllNewsQuery, useDeleteNewsByIdMutation } = newsApi
