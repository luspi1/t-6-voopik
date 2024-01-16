import { type FC } from 'react'

import { DocumentsItem } from 'src/components/documents-item/documents-item'
import { brandbookData } from './consts'

export const Brandbook: FC = () => {
	return <DocumentsItem {...brandbookData} />
}
