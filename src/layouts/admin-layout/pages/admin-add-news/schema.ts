import * as yup from 'yup'

export type AddNewsInputs = {
	shortTitle: string
	date: Date
	tags: string
	shortDesc: string
	pageText: string
	seoDesc: string
	seoWords: string
	main?: string
	hidden?: string
}

export const addNewsSchema = yup.object({
	shortTitle: yup.string().required('Введите краткое наименование'),
	date: yup.date().typeError('Неверный формат даты').required('Введите дату публикации'),
	tags: yup.string().required('Введите теги'),
	shortDesc: yup.string().required('Введите краткое описание'),
	pageText: yup.string().required('Введите текст для страницы'),
	seoDesc: yup.string().required('Введите описание'),
	seoWords: yup.string().required('Введите ключевые слова'),
})