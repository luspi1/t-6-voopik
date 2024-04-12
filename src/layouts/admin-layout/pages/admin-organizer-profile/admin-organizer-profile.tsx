import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type OrganizerProfileInputs,
	organizerProfileSchema,
} from 'src/layouts/admin-layout/pages/admin-organizer-profile/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { TitleSection } from 'src/layouts/admin-layout/pages/admin-organizer-profile/components/title-section/title-section'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { AvatarSection } from 'src/layouts/admin-layout/pages/admin-organizer-profile/components/avatar-section/avatar-section'
export const AdminOrganizerProfile: FC = () => {
	const methods = useForm<OrganizerProfileInputs>({
		mode: 'onBlur',
		resolver: yupResolver(organizerProfileSchema),
		defaultValues: {
			orgAvatar: [],
		},
	})

	const onSubmit: SubmitHandler<OrganizerProfileInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Профиль организатора</title>
			</Helmet>
			<h1>Профиль организатора</h1>
			<AdminContent $padding='25px 30px 35px'>
				<p className={adminStyles.adminPrompt}>
					поля, отмеченные символом *, обязательны для заполнения
				</p>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
						<TitleSection />
						<AvatarSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} variant='2' />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
