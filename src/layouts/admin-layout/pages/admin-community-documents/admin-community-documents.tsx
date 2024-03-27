import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AppRoute } from 'src/routes/main-routes/consts'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import {
	type CommunityDocumentsInputs,
	communityDocumentsSchema,
} from 'src/layouts/admin-layout/pages/admin-community-documents/schema'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { TitleSection } from 'src/layouts/admin-layout/pages/admin-community-documents/components/title-section/title-section'
import { CharterSection } from 'src/layouts/admin-layout/pages/admin-community-documents/components/charter-section/charter-section'

export const AdminCommunityDocuments: FC = () => {
	const methods = useForm<CommunityDocumentsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(communityDocumentsSchema),
	})

	const onSubmit: SubmitHandler<CommunityDocumentsInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Документы Общества</title>
			</Helmet>
			<h1>Документы Общества</h1>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to={`/${AppRoute.About}/${AppRoute.AboutDocuments}`}
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<TitleSection />
						<CharterSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
