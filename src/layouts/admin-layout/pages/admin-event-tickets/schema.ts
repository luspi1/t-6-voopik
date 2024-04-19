import * as yup from 'yup'

type TicketItem = {
	title: string
	quantity: string
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
					}),
				)
			: schema.notRequired()
	}),
})
