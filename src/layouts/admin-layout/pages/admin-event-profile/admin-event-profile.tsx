import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type EventProfileInputs,
	eventProfileSchema,
} from 'src/layouts/admin-layout/pages/admin-event-profile/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { TitleSection } from 'src/layouts/admin-layout/pages/admin-event-profile/components/title-section/title-section'

import { DateSection } from 'src/layouts/admin-layout/pages/admin-event-profile/components/date-section/date-section'
import { DescSection } from 'src/layouts/admin-layout/pages/admin-event-profile/components/desc-section/desc-section'

import { AreaSection } from 'src/layouts/admin-layout/pages/admin-event-profile/components/area-section/area-section'
import { NewAreaSection } from 'src/layouts/admin-layout/pages/admin-event-profile/components/new-area-section/new-area-section'
import adminStyles from 'src/layouts/admin-layout/index.module.scss'
export const AdminEventProfile: FC = () => {
	const methods = useForm<EventProfileInputs>({
		mode: 'onBlur',
		resolver: yupResolver(eventProfileSchema),
		defaultValues: {
			newAreaSection: false,
		},
	})

	const onSubmit: SubmitHandler<EventProfileInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Профиль события</title>
			</Helmet>
			<h1>Профиль события</h1>
			<AdminContent $padding='25px 30px 35px'>
				<p className={adminStyles.adminPrompt}>
					поля, отмеченные символом *, обязательны для заполнения
				</p>
				<FormProvider {...methods}>
					<form
						className={adminStyles.adminPromptsForm}
						onSubmit={methods.handleSubmit(onSubmit)}
						noValidate
					>
						<TitleSection />
						<DateSection />
						<DescSection />
						<AreaSection />
						<NewAreaSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} variant='2' />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
