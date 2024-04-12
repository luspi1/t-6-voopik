import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type OrganizerProfileInputs = {
	orgShortName: string
	orgFullName: string
	orgTrademark: string
	orgRegionList: string
	orgLocality: string
	orgAvatar: FileWithPreview[]
}

export const organizerProfileSchema = yup.object().shape({
	orgShortName: yup.string().required('Введите краткое наименование'),
	orgFullName: yup.string().required('Введите полное наименование'),
	orgTrademark: yup.string().required('Введите торговую марку'),
	orgRegionList: yup.string().required().notOneOf(['0'], 'Выберите регион'),
	orgLocality: yup.string().required('Укажите населенный пункт'),
	orgAvatar: yup.array().min(1, 'Загрузите аватар').required('Загрузите аватар'),
})
