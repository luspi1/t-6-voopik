import * as yup from 'yup'

export type EventProfileInputs = {
	eventName: string
	eventType: string
	eventLevel: string
	eventSite?: string
	eventTags?: string
	dateEventStart: Date
	timeEventStart: Date
	dateEventEnd: Date
	timeEventEnd: Date
	shortDesc: string
	fullDesc: string
	eventConditions: string
}

export const eventProfileSchema = yup.object().shape({
	eventName: yup.string().required('Введите название события'),
	eventType: yup.string().required().notOneOf(['0'], 'Выберите значение'),
	eventLevel: yup.string().required().notOneOf(['0'], 'Выберите значение'),
	dateEventStart: yup.date().required('Введите дату'),
	timeEventStart: yup.date().required('Введите время'),
	dateEventEnd: yup.date().required('Введите дату'),
	timeEventEnd: yup.date().required('Введите время'),
	shortDesc: yup.string().required('Введите краткое описание'),
	fullDesc: yup.string().required('Введите подробное описание'),
	eventConditions: yup.string().required('Укажите условия'),
})
