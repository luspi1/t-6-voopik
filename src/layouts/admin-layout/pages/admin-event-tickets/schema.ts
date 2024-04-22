import * as yup from 'yup'

type TicketItem = {
	title: string
	quantity: string
	isPaidTicket: boolean
	isQuickReg: boolean
	isHimselfBuy: boolean
	isReturnTicket: boolean
	priceTicket: string
	isAllLocationsVisitors: boolean
	isLargeField: boolean
	isStandsField: boolean
	isCafe: boolean
	isHonoraryBox: boolean
	isAllLocationsParticipants: boolean
	isDressingRoom: boolean
	isCanteenSportsmen: boolean
	isCoaching: boolean
	isAllLocationsOrganizers: boolean
	isJudicial: boolean
	isOfficeArea: boolean
	isUnderTribune: boolean
	isMultipleEntry: boolean
}

export type EventTicketsInputs = {
	ticketsSection: boolean
	tickets?: TicketItem[]
}

export const eventTicketsSchema = yup.object().shape({
	ticketsSection: yup.boolean().required(''),
	tickets: yup.array().when('ticketsSection', ([ticketsSection], schema) => {
		return ticketsSection
			? schema.of(
					yup.object().shape({
						title: yup.string().required('Введите название билета'),
						priceTicket: yup.string().required('Введите стоимость билета'),
					}),
				)
			: schema.notRequired()
	}),
})
