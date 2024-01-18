import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
import { useParams } from 'react-router-dom'

export const DepartmentsDetailsInfo: FC = () => {
	const { id } = useParams()

	const { data: regionData } = useGetRegionByCodeQuery(id ?? '0')

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

			<h2>{regionData.fullTitle}</h2>

			<p>{regionData.type}</p>
		</PageContent>
	)
}
