import * as yup from 'yup'

export type EventRegInputs = {
	regVisitorSection?: boolean
	regVisitorDateOpen?: Date
	regVisitorDateClose?: Date
	regVisitorTimeOpen?: Date
	regVisitorTimeClose?: Date
	autoAdmitVisitors?: boolean
	publicVisitorsList?: boolean
}

export const eventRegSchema = yup.object().shape({
	regVisitorSection: yup.boolean(),
	regVisitorDateOpen: yup.date().when('regVisitorSection', ([regVisitorSection], schema) => {
		return regVisitorSection ? schema.required('Укажите дату открытия') : schema.notRequired()
	}),
	regVisitorDateClose: yup.date().when('regVisitorSection', ([regVisitorSection], schema) => {
		return regVisitorSection ? schema.required('Укажите дату закрытия') : schema.notRequired()
	}),
	regVisitorTimeOpen: yup.date().when('regVisitorSection', ([regVisitorSection], schema) => {
		return regVisitorSection ? schema.required('Укажите время открытия') : schema.notRequired()
	}),
	regVisitorTimeClose: yup.date().when('regVisitorSection', ([regVisitorSection], schema) => {
		return regVisitorSection ? schema.required('Укажите время закрытия') : schema.notRequired()
	}),
})
