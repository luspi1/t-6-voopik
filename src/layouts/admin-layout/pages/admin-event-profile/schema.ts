import * as yup from 'yup'

export type EventProfileInputs = {
	eventName: string
}

export const eventProfileSchema = yup.object().shape({
	eventName: yup.string().required('Введите название события'),
})
