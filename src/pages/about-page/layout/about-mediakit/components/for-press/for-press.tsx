import { type FC } from 'react'

import { DocumentsList } from 'src/components/documents-list/documents-list'
import { forPressData } from './consts'

export const ForPress: FC = () => {
	return <DocumentsList listTitle='Для прессы' data={forPressData} />
}
