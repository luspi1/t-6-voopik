import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type AddNewsInputs = {
	shortTitle: string
	datePublic: Date
	tags: string
	shortDesc: string
	pageText: string
	seoDesc: string
	seoWords: string
	gallery?: string
	isHidden?: string
	isMain?: string
	newsImage?: FileWithPreview[]
}

export const addNewsSchema = yup.object({
	shortTitle: yup.string().required('Введите краткое наименование'),
	datePublic: yup.date().typeError('Неверный формат даты').required('Введите дату публикации'),
	tags: yup.string().required('Введите теги'),
	shortDesc: yup.string().required('Введите краткое описание'),
	pageText: yup.string().required('Введите текст для страницы'),
	seoDesc: yup.string().required('Введите описание'),
	seoWords: yup.string().required('Введите ключевые слова'),
})
