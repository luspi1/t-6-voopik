import { type FC } from 'react'
import {
	type MediakitInputs,
	mediaPressSchema,
} from 'src/layouts/admin-layout/pages/admin-community-mediakit/schema'

import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { TitleSection } from 'src/layouts/admin-layout/pages/admin-community-mediakit/components/title-section/title-section'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AppRoute } from 'src/routes/main-routes/consts'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { PressSection } from 'src/layouts/admin-layout/pages/admin-community-mediakit/components/press-section/press-section'
import { BrandSection } from 'src/layouts/admin-layout/pages/admin-community-mediakit/components/brand-section/brand-section'

export const AdminCommunityMediakit: FC = () => {
	const methods = useForm<MediakitInputs>({
		mode: 'onBlur',
		resolver: yupResolver(mediaPressSchema),
		defaultValues: {
			brandBookPdf: [],
			brandBookDocx: [],
			pressSection: true,
			pressDocs: [
				{
					pressTitle: '',
					pressVersion: '',
					pressDocPdf: [],
					pressDocDocx: [],
					pressDocArchive: [],
				},
			],
		},
	})

	const onSubmit: SubmitHandler<MediakitInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Медиакит</title>
			</Helmet>
			<h1>Медиакит</h1>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to={`/${AppRoute.About}/${AppRoute.AboutMediakit}`}
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<TitleSection />
						<BrandSection />
						<PressSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
