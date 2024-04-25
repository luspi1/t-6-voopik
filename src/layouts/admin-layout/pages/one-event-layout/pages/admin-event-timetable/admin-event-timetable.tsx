import { type FC } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import {
	type EventTimetableInputs,
	eventTimetableSchema,
} from 'src/layouts/admin-layout/pages/one-event-layout/pages/admin-event-timetable/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/layouts/admin-layout/components/event-title/event-title'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AppRoute } from 'src/routes/main-routes/consts'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
export const AdminEventTimetable: FC = () => {
	const methods = useForm<EventTimetableInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventTimetableSchema),
	})

	const onSubmit: SubmitHandler<EventTimetableInputs> = (data) => {
		console.log(data)
	}
	return (
		<AdminContent $padding='25px 30px 35px'>
			<AdminButton
				className={adminStyles.adminViewPageLink}
				as='link'
				to={`/${AppRoute.Events}`}
				$margin='0 0 29px 0'
				$outlined
			>
				Посмотреть страницу на сайте
			</AdminButton>
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
					<AdminControllers outLink={`/${AdminRoute.AdminHome}`} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
