import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import {
	type UserProfileInputs,
	userProfileSchema,
} from 'src/layouts/admin-layout/pages/admin-user-profile/schema'
import { TitleSection } from 'src/layouts/admin-layout/pages/admin-user-profile/components/title-section/title-section'
import { AvatarSection } from 'src/layouts/admin-layout/pages/admin-user-profile/components/avatar-section/avatar-section'
import { ContactsSection } from 'src/layouts/admin-layout/pages/admin-user-profile/components/contacts-section/contacts-section'
import { DescSection } from 'src/layouts/admin-layout/pages/admin-user-profile/components/desc-section/desc-section'
import { AuthSection } from 'src/layouts/admin-layout/pages/admin-user-profile/components/auth-section/auth-section'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
export const AdminUserProfile: FC = () => {
	const methods = useForm<UserProfileInputs>({
		mode: 'onBlur',
		resolver: yupResolver(userProfileSchema),
		defaultValues: {
			userAvatar: [],
		},
	})

	const onSubmit: SubmitHandler<UserProfileInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Профиль пользователя</title>
			</Helmet>
			<h1>Профиль пользователя</h1>
			<AdminContent $padding='25px 30px 35px'>
				<p className={adminStyles.adminPrompt}>
					поля, отмеченные символом *, обязательны для заполнения
				</p>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
						<TitleSection />
						<AvatarSection />
						<ContactsSection />
						<DescSection />
						<AuthSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} variant='2' />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
