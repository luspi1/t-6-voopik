import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/layouts/admin-layout/components/event-title/event-title'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import {
	defaultTicketValues,
	type EventTicketsInputs,
	eventTicketsSchema,
} from 'src/layouts/admin-layout/pages/admin-event-tickets/schema'
import { TicketsSection } from 'src/layouts/admin-layout/pages/admin-event-tickets/components/tickets-section/tickets-section'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'

export const AdminEventTickets: FC = () => {
	const methods = useForm<EventTicketsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventTicketsSchema),
		defaultValues: {
			ticketsSection: true,
			tickets: [defaultTicketValues],
		},
	})

	const onSubmit: SubmitHandler<EventTicketsInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Билеты и допуски</title>
			</Helmet>
			<h1>Билеты и допуски</h1>
			<AdminContent $padding='25px 30px 35px'>
				<p className={adminStyles.adminPrompt}>
					поля, отмеченные символом *, обязательны для заполнения
				</p>
				<EventTitle
					title='Конференция ВООПИК 2024'
					dates={['26 августа 2023 года', '28 августа 2023 года']}
					address='с. Атманов Угол Тамбовской области'
				/>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
						<TicketsSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} variant='2' />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
