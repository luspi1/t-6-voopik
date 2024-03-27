import * as yup from 'yup'

type PhoneNumbers = {
	phoneOwner: string
	phoneAddress: string
	phoneNumber: string
}

export type ContactsInputs = {
	mapScript: string
	mailSection?: boolean
	mailAddress?: string
	phonesSection?: boolean
	phoneNumbers?: PhoneNumbers[]
}

export const contactsSchema = yup.object().shape({
	mapScript: yup.string().required('Введите текст скрипта'),
	mailSection: yup.boolean(),
	mailAddress: yup.string().when('mailSection', ([mailSection]) => {
		return mailSection ? yup.string().required('Введите адрес') : yup.string().notRequired()
	}),
	phonesSection: yup.boolean(),
	phoneNumbers: yup.array().when('phonesSection', ([phonesSection]) => {
		return phonesSection
			? yup.array().of(
					yup.object().shape({
						phoneOwner: yup.string().required('Введите владельца номера'),
						phoneAddress: yup.string().required('Введите адрес'),
						phoneNumber: yup.string().required('Введите номер телефона'),
					}),
				)
			: yup.array().notRequired()
	}),
})
