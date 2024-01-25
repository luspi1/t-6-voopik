import { type FC, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
import { useActions } from 'src/hooks/actions/actions'
import { AppRoute } from 'src/helpers/consts'
import styles from './index.module.scss'

import { DepartmentMainInfo } from './components/department-main-info/department-main-info'
import { DepartmentStatus } from './components/department-status/department-status'
import { DepartmentDescription } from 'src/pages/departments-page/layout/departments-details-info/components/department-description/department-description'
import { DepartmentDocuments } from 'src/pages/departments-page/layout/departments-details-info/components/department-documents/department-documents'
import { DepartmentLinks } from 'src/pages/departments-page/layout/departments-details-info/components/department-links/department-links'

export const DepartmentsDetailsInfo: FC = () => {
	const { id } = useParams()

	const { data: regionData } = useGetRegionByCodeQuery(id ?? '')

	const { setAdditionalCrumbs } = useActions()

	useEffect(() => {
		if (regionData?.fullTitle) {
			setAdditionalCrumbs(regionData.fullTitle)
		}
		return () => {
			setAdditionalCrumbs(null)
		}
	}, [regionData])

	if (!regionData) {
		return (
			<PageContent $padding='30px 35px 30px 30px'>
				<Helmet>
					<title>Информация о регионе</title>
				</Helmet>
				<h2>Нет информации о данном регионе</h2>
			</PageContent>
		)
	}

	return (
		<PageContent $padding='30px 35px 30px 30px'>
			<Helmet>
				<title>Информация о регионе</title>
			</Helmet>
			<DepartmentMainInfo {...regionData} />
			<DepartmentDescription {...regionData} />
			<DepartmentStatus {...regionData} />
			<DepartmentDocuments {...regionData} />
			<DepartmentLinks {...regionData} />
			<p className={styles.pageMainLink}>
				<Link to={`/${AppRoute.Departments}`}>На страницу списка отделений</Link>
			</p>
		</PageContent>
	)
}
