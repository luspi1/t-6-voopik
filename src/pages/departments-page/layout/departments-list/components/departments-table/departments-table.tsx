import { generatePath, Link } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'

import {
	DepartmentsRegions,
	departmentTableData,
} from 'src/pages/departments-page/layout/departments-list/components/departments-table/consts'

import styles from './index.module.scss'
import { AppRoute } from 'src/helpers/consts'
import { useGetAllRegionsQuery } from 'src/store/regions/regions.api'

export const DepartmentsTable = () => {
	const { data: regionsList } = useGetAllRegionsQuery(null)
	console.log(regionsList)

	const tableTitles = [
		'№',
		'Код региона',
		'Логотип',
		<TableSearch key={3} />,
		'Дата открытия',
		'Статус Отделения',
	]

	return (
		<CustomTable
			className={styles.departmentTable}
			cellsData={departmentTableData}
			colTitles={tableTitles}
			additionalElements={[
				{
					col: 2,
					el: DepartmentsRegions.map((regionEl) => (
						<img src={regionEl.logo} alt={regionEl.title} key={regionEl.regionCode} />
					)),
				},

				{
					col: 3,
					el: DepartmentsRegions.map((regionEl) => (
						<Link
							to={generatePath(AppRoute.DepartmentsDetailsInfo, { id: regionEl.regionCode })}
							key={regionEl.regionCode}
						>
							{regionEl.title}
						</Link>
					)),
				},
			]}
		/>
	)
}
