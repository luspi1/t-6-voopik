import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type EventContentInputs,
	eventContentSchema,
} from 'src/layouts/admin-layout/pages/admin-event-content/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/layouts/admin-layout/components/event-title/event-title'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { PreviewSection } from 'src/layouts/admin-layout/pages/admin-event-content/components/preview-section/preview-section'

export const AdminEventContent: FC = () => {
	const methods = useForm<EventContentInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventContentSchema),
	})

	const onSubmit: SubmitHandler<EventContentInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Контент</title>
			</Helmet>
			<h1>Контент</h1>
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
						<PreviewSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} variant='2' />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
