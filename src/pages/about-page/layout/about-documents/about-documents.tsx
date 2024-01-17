import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { DocumentsItem } from 'src/components/documents-item/documents-item'
import {
	lawsData,
	regulationData,
	rulesData,
} from 'src/pages/about-page/layout/about-documents/consts'
import { DocumentsList } from 'src/components/documents-list/documents-list'

import styles from './index.module.scss'

type AboutDocumentsProps = {
	regulationData: Document
}
export const AboutDocuments: FC<AboutDocumentsProps> = () => {
	return (
		<div className={styles.documentsPage}>
			<Helmet>
				<title>Об Обществе – Документы</title>
			</Helmet>

			<h2>Документы</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<DocumentsItem {...regulationData} />
			<DocumentsList className={styles.rules} listTitle='Регламенты и правила' data={rulesData} />
			<DocumentsList listTitle='Законы и нормы' data={lawsData} />
		</div>
	)
}
