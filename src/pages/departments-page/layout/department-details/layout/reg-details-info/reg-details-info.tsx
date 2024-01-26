import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
import { DepartmentDescription } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-description/department-description'
import { DepartmentStatus } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-status/department-status'
import { DepartmentDocuments } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-documents/department-documents'
import { DepartmentLinks } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-links/department-links'
import { DepartmentMainInfo } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-main-info/department-main-info'

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
		</div>
	)
}
