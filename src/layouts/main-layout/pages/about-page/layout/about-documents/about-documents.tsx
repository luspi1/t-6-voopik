import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { DocumentsItem } from 'src/components/documents-item/documents-item'
import {
	lawsData,
	regulationData,
	rulesData,
} from 'src/layouts/main-layout/pages/about-page/layout/about-documents/consts'
import { DocumentsList } from 'src/components/documents-list/documents-list'

import styles from './index.module.scss'
import { FeedbackForm } from 'src/modules/feedback-form/feedback-form'
import { PageContent } from 'src/components/page-content/page-content'
export const AboutDocuments: FC = () => {
	return (
		<div>
			<PageContent className={styles.documentsPage} $padding='30px 50px 100px 30px' $margin='0'>
				<Helmet>
					<title>Об Обществе – Документы</title>
				</Helmet>

				<h2>Документы</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
					Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
					pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
					sed rhoncus pronin sapien nunc accuan eget.
				</p>
				<DocumentsItem {...regulationData} />
				<DocumentsList className={styles.rules} listTitle='Регламенты и правила' data={rulesData} />
				<DocumentsList listTitle='Законы и нормы' data={lawsData} />
			</PageContent>
			<FeedbackForm />
		</div>
	)
}
