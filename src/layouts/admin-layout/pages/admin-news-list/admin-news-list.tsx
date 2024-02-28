import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusIconSvg } from 'src/UI/icons/plusIconSVG'
import { NewsTable } from 'src/layouts/admin-layout/pages/admin-news-list/components/news-table/news-table'

export const AdminNewsList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Новости</title>
			</Helmet>
			<h1>Новости</h1>
			<AdminContent className={styles.newsListContent} $height='1100px'>
				<MainButton
					className={styles.topAddNewsBtn}
					to={`/${AdminRoute.AdminHome}/${AdminRoute.AdminAddNews}`}
					as='route'
				>
					<PlusIconSvg />
					Добавить новость
				</MainButton>
				<NewsTable />
				<MainButton to={`/${AdminRoute.AdminHome}/${AdminRoute.AdminAddNews}`} as='route'>
					<PlusIconSvg />
					Добавить новость
				</MainButton>
			</AdminContent>
		</>
	)
}
