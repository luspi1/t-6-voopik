import { type FC } from 'react'

import { DocumentsList } from '../documents-list/documents-list'
import { rulesData } from './consts'
import styles from './index.module.scss'

export const Rules: FC = () => {
	return (
		<DocumentsList className={styles.rules} listTitle='Регламенты и правила' data={rulesData} />
	)
}
