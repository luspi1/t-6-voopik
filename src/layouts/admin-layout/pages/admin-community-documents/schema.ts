import * as yup from 'yup'

export type CommunityDocumentsInputs = {
	titleText: string
	charterName: string
	charterDescription: string
	charterVersion: string
}

export const communityDocumentsSchema = yup.object().shape({
	titleText: yup.string().required('Введите заглавный текст'),
	charterName: yup.string().required('Введите название устава'),
	charterDescription: yup.string().required('Введите короткое описание устава'),
	charterVersion: yup.string().required('Введите номер версии'),
})
