import { type FC } from 'react'

import { DocumentsItem } from 'src/components/documents-item/documents-item'
import { regulationData } from './consts'

export const Regulation: FC = () => {
	return <DocumentsItem {...regulationData} />
}
