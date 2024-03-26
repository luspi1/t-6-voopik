import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AppRoute } from 'src/routes/main-routes/consts'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { yupResolver } from '@hookform/resolvers/yup'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import cn from 'classnames'
import {
	type ArticleInputs,
	articleSchema,
} from 'src/layouts/admin-layout/pages/admin-community-history/schema'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import styles from './index.module.scss'
export const AdminCommunityHistory: FC = () => {
	const methods = useForm<ArticleInputs>({
		mode: 'onBlur',
		resolver: yupResolver(articleSchema),
	})

	const onSubmit: SubmitHandler<ArticleInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>История общества</title>
			</Helmet>
			<h1>История общества</h1>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to={`/${AppRoute.About}/${AppRoute.AboutHistory}`}
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<AdminSection titleText='Основная статья'>
							<ControlledInput
								className={adminStyles.adminMainInput}
								name='articleName'
								label='Название статьи'
								placeholder='Название статьи'
								margin='0 0 15px 0'
							/>
							<ControlledInput
								className={cn(adminStyles.adminMainInput, styles.articleTextarea)}
								name='articleText'
								label='Текст статьи'
								margin='0'
								isTextarea
							/>
						</AdminSection>
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
