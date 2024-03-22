import * as yup from 'yup'

type ImportantBlockLinks = {
	textLink: string
	urlAddress: string
}

export type CommunityInputs = {
	aboutTitleImage?: File[]
	importantLinks?: ImportantBlockLinks[]
	linksSection?: boolean
	nameBlockLinks?: string
	epigraphText: string
	epigraphSign: string
}

export const communitySchema = yup.object().shape({
	epigraphText: yup.string().required('Введите текст'),
	epigraphSign: yup.string().required('Введите подпись'),
	linksSection: yup.boolean(),
	nameBlockLinks: yup.string().when('linksSection', ([linksSection]) => {
		return linksSection
			? yup.string().required('Введите название блока')
			: yup.string().notRequired()
	}),

	importantLinks: yup.array().when('linksSection', ([linksSection]) => {
		return linksSection
			? yup.array().of(
					yup.object().shape({
						textLink: yup.string().required('Введите текст ссылки'),
						urlAddress: yup.string().required('Введите URL'),
					}),
				)
			: yup.array().notRequired()
	}),
})
