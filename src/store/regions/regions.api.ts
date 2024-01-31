import { type RegionItem } from 'src/types/regions'
import { type ShortUserItemType } from 'src/types/users'
import { type EventsItem } from 'src/types/events'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const regionsApi = createApi({
	reducerPath: ReducerPath.Regions,
	tagTypes: ['Regions'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllRegions: build.query<RegionItem[], string>({
			query: (search) => ({
				url: `regions`,
				params: {
					q: search,
				},
			}),
		}),
		getRegionByCode: build.query<RegionItem, string>({
			query: (regCode) => ({
				url: `regions/${regCode}`,
			}),
		}),

		getRegionParticipants: build.query<ShortUserItemType[], [string, string]>({
			query: ([search, regCode]) => ({
				url: `regions/${regCode}/participants`,
				params: {
					q: search,
				},
			}),
		}),

		getRegionEvents: build.query<EventsItem[], [string, string]>({
			query: ([search, regCode]) => ({
				url: `regions/${regCode}/events`,
				params: {
					q: search,
				},
			}),
		}),
	}),
})

export const {
	useGetAllRegionsQuery,
	useGetRegionByCodeQuery,
	useGetRegionParticipantsQuery,
	useGetRegionEventsQuery,
} = regionsApi
