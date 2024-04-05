import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import {
	type AddNewsInputs,
	addNewsSchema,
} from 'src/layouts/admin-layout/pages/admin-add-news/schema'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

import styles from './index.module.scss'
import adminStyles from 'src/layouts/admin-layout/index.module.scss'

export const AdminAddNews: FC = () => {
	const methods = useForm<AddNewsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(addNewsSchema),
		defaultValues: {
			newsImage: [],
		},
	})

	const onSubmit: SubmitHandler<AddNewsInputs> = (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<h1>Добавить новость</h1>
			<AdminContent $padding='20px 30px 35px'>
				<FormProvider {...methods}>
					<form
						className={styles.newsForm}
						onSubmit={methods.handleSubmit(onSubmit)}
						noValidate
						autoComplete='off'
					>
						<div className={styles.newsFormWrapper}>
							<div className={styles.newsFormFields}>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='shortTitle'
									placeholder='Наименование'
									label='Краткое наименование'
								/>
								<ControlledDateInput
									className={adminStyles.adminDateInput}
									name='datePublic'
									label='Дата публикации'
									dateFormat='dd.MM.yyyy'
									placeholder='дд.мм.гггг'
								/>

								<ControlledInput
									className={adminStyles.adminMainInput}
									name='tags'
									label='Введите теги через запятую. Не более 5 тегов на 1 новость'
								/>
								<ControlledSelect
									className={adminStyles.adminSelect}
									label='Галерея'
									selectOptions={[
										{ label: 'Не выбрано', value: '0' },
										{ label: 'Галерея 1', value: '1' },
										{ label: 'Галерея 2', value: '2' },
										{ label: 'Галерея 3', value: '3' },
									]}
									name='gallery'
								/>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='shortDesc'
									label='Введите краткое описание'
									margin='0'
									isTextarea
								/>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='pageText'
									label={
										<span>
											<b>Введите текст для страницы</b> (перейти в текстовый режим)
										</span>
									}
									isTextarea
								/>

								<ReactDropzone
									className={styles.newsDropzone}
									label='Основная картинка'
									name='newsImage'
									prompt='Перетащите изображение на это поле'
									accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
								/>

								<h3>SEO (продвижение сайта)</h3>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='seoDesc'
									placeholder='Описание'
									label='Введите описание (description)'
								/>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='seoWords'
									placeholder='Ключевые слова'
									label='Введите ключевые слова (keywords)'
								/>
								<div className={adminStyles.adminBtns}>
									<AdminButton as='button' type='submit'>
										Сохранить
									</AdminButton>
									<AdminButton
										to={`/${AdminRoute.AdminHome}/${AdminRoute.AdminNewsList}`}
										as='link'
										$danger
									>
										Отменить
									</AdminButton>
								</div>
							</div>
							<div>
								<ControlledSelect
									className={styles.asideSelect}
									label='Ключевая новость?'
									selectOptions={[
										{ label: 'Нет', value: '0' },
										{ label: 'Да', value: '1' },
									]}
									name='isMain'
								/>
								<ControlledSelect
									className={styles.asideSelect}
									label='Спрятать новость?'
									selectOptions={[
										{ label: 'Нет', value: '0' },
										{ label: 'Да', value: '1' },
									]}
									name='isHidden'
								/>
							</div>
						</div>
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
