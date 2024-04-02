import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
import { DepartmentDescription } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-description/department-description'
import { DepartmentStatus } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-status/department-status'
import { DepartmentDocuments } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-documents/department-documents'
import { DepartmentLinks } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-links/department-links'
import { DepartmentMainInfo } from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-main-info/department-main-info'
import departmentsStyles from 'src/layouts/main-layout/pages/departments-page/layout/department-details/layout/index.module.scss'
import { AppRoute } from 'src/routes/main-routes/consts'

export const RegDetailsInfo: FC = () => {
	const { id } = useParams()

	const { data: regionData } = useGetRegionByCodeQuery(id ?? '')

	return (
		<div>
			<Helmet>
				<title>Информация о регионе</title>
			</Helmet>
			<DepartmentMainInfo {...regionData} />
			<DepartmentDescription {...regionData} />
			<DepartmentStatus {...regionData} />
			<DepartmentDocuments {...regionData} />
			<DepartmentLinks {...regionData} />
			<Link className={departmentsStyles.pageMainLink} to={`/${AppRoute.Departments}`}>
				На страницу списка отделений
			</Link>
		</div>
	)
}
