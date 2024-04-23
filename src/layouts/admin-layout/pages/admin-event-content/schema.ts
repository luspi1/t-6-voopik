import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type EventContentInputs = {
	contentLogo: FileWithPreview[]
}

export const eventContentSchema = yup.object().shape({
	contentLogo: yup.array().min(1, 'Загрузите логотип').required('Загрузите логотип'),
})
