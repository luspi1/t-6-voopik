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
import styles from './index.module.scss'
import adminStyles from 'src/layouts/admin-layout/index.module.scss'
export const AdminAddNews: FC = () => {
	const methods = useForm<AddNewsInputs>({ mode: 'onBlur', resolver: yupResolver(addNewsSchema) })

	const onSubmit: SubmitHandler<AddNewsInputs> = (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<h1>Добавить новость</h1>
			<AdminContent>
				<FormProvider {...methods}>
					<form className={styles.newsForm} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.newsFormWrapper}>
							<div className={styles.newsFormFields}>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='shortTitle'
									placeholder='Наименование'
									label='Краткое наименование'
								/>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='date'
									type='date'
									placeholder='дд.мм.гггг'
									label='Дата публикации'
								/>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='tags'
									label='Введите теги через запятую. Не более 5 тегов на 1 новость'
								/>
								<ControlledSelect
									options={[
										{ label: 'Не выбрано', value: '0' },
										{ label: 'Галерея 1', value: '1' },
										{ label: 'Галерея 2', value: '2' },
										{ label: 'Галерея 3', value: '3' },
									]}
									name='main'
								/>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='shortDesc'
									label='Введите краткое описание'
									isTextarea
								/>
								<ControlledInput
									className={adminStyles.adminMainInput}
									name='pageText'
									label='Введите текст для страницы'
									isTextarea
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
							</div>
							<div>
								<ControlledSelect
									options={[
										{ label: 'Нет', value: '0' },
										{ label: 'Да', value: '1' },
									]}
									name='main'
								/>
								<ControlledSelect
									options={[
										{ label: 'Нет', value: '0' },
										{ label: 'Да', value: '1' },
									]}
									name='hidden'
								/>
							</div>
						</div>

						<button>Отправить</button>
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
