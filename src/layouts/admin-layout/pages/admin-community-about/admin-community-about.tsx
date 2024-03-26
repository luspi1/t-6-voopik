import { type FC } from 'react'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import {
	type CommunityInputs,
	communitySchema,
} from 'src/layouts/admin-layout/pages/admin-community-about/schema'

import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { TitleSection } from 'src/layouts/admin-layout/pages/admin-community-about/components/title-section/title-section'
import { AppRoute } from 'src/routes/main-routes/consts'

import { AdminRoute } from 'src/routes/admin-routes/consts'
import { LinksSection } from 'src/layouts/admin-layout/pages/admin-community-about/components/links-sections/links-section'
import { GallerySection } from 'src/layouts/admin-layout/pages/admin-community-about/components/gallery-section/gallery-section'
import { ArticleSection } from 'src/layouts/admin-layout/pages/admin-community-about/components/article-section/article-section'
import { DocumentsSection } from 'src/layouts/admin-layout/pages/admin-community-about/components/documents-section/documents-section'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'

export const AdminCommunityAbout: FC = () => {
	const methods = useForm<CommunityInputs>({
		mode: 'onBlur',
		resolver: yupResolver(communitySchema),
		defaultValues: {
			aboutTitleImage: [],
			linksSection: true,
			gallerySection: true,
			galleryImages: [],
			articleSection: true,
			docSection: true,
			docFiles: [],
		},
	})

	const onSubmit: SubmitHandler<CommunityInputs> = (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>Об обществе</title>
			</Helmet>
			<h1>Об обществе</h1>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to={`/${AppRoute.About}`}
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<TitleSection />
						<LinksSection />
						<GallerySection />
						<ArticleSection />
						<DocumentsSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
