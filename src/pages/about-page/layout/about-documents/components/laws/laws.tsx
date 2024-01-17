import { type FC } from 'react'

import { DocumentsList } from 'src/components/documents-list/documents-list'
import { lawsData } from './consts'

export const Laws: FC = () => {
	return <DocumentsList listTitle='Законы и нормы' data={lawsData} />
}
