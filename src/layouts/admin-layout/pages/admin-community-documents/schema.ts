import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

type RulesDoc = {
	ruleTitle: string
	ruleVersion: string
	rulePdf?: FileWithPreview[]
	ruleDocx?: FileWithPreview[]
}
type LawsDoc = {
	lawTitle: string
	lawVersion: string
	lawDocLink: string
	lawDocSource: string
	lawDocFile?: FileWithPreview[]
}

export type CommunityDocumentsInputs = {
	titleText: string
	charterName: string
	charterDescription: string
	charterVersion: string
	charterPdf?: FileWithPreview[]
	charterDocx?: FileWithPreview[]
	rulesSection?: boolean
	rulesDocs?: RulesDoc[]
	lawsSection?: boolean
	lawsDocs?: LawsDoc[]
}

export const communityDocumentsSchema = yup.object().shape({
	titleText: yup.string().required('Введите заглавный текст'),
	charterName: yup.string().required('Введите название устава'),
	charterDescription: yup.string().required('Введите короткое описание устава'),
	charterVersion: yup.string().required('Введите номер версии'),
	rulesSection: yup.boolean(),
	rulesDocs: yup.array().when('rulesSection', ([rulesSection]) => {
		return rulesSection
			? yup.array().of(
					yup.object().shape({
						ruleTitle: yup.string().required('Введите название документа'),
						ruleVersion: yup.string().required('Введите номер версии'),
					}),
				)
			: yup.array().notRequired()
	}),
})
