import * as yup from 'yup'

type ImportantBlockLinks = {
	textLink: string
	urlAddress: string
}

export type CommunityInputs = {
	aboutTitleImage?: File[]
	importantLinks?: ImportantBlockLinks[]
	epigraphText: string
	epigraphSign: string
	nameBlockLinks: string
}

export const communitySchema = yup.object().shape({
	epigraphText: yup.string().required('Введите текст'),
	epigraphSign: yup.string().required('Введите подпись'),
	nameBlockLinks: yup.string().required('Введите название блока'),
	importantLinks: yup.array().of(
		yup.object().shape({
			textLink: yup.string().required('Введите текст ссылки'),
			urlAddress: yup.string().required('Введите URL'),
		}),
	),
})
