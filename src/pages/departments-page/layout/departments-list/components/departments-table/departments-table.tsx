import { type RegionItem } from 'src/types/regions'

import { generatePath, Link } from 'react-router-dom'

import { useGetAllRegionsQuery } from 'src/store/regions/regions.api'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { Loader } from 'src/components/loader/loader'

import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
import { formatDate1 } from 'src/helpers/utils'

export const DepartmentsTable = () => {
	const { data: regionsList, isLoading } = useGetAllRegionsQuery(null)

	const tableTitles = [
		'№',
		'Код региона',
		'Логотип',
		<TableSearch key={3} />,
		'Дата открытия',
		'Статус Отделения',
	]

	const formatRegionsTableData = (regionsData: RegionItem[]) => {
		return regionsData.map((regionEl, idx) => {
			return [
				String(idx + 1),
				regionEl.regionCode,
				<img src={regionEl.logo} alt={regionEl.title} key={idx} />,
				<Link
					to={generatePath(AppRoute.DepartmentsDetailsInfo, { id: regionEl.regionCode })}
					state={{ regionTitle: regionEl.fullTitle }}
					key={regionEl.regionCode}
				>
					{regionEl.title}
				</Link>,
				formatDate1(regionEl.openDate),
				regionEl.status,
			]
		})
	}

	if (isLoading || !regionsList) return <Loader />

	return (
		<CustomTable
			className={styles.departmentTable}
			cellsData={formatRegionsTableData(regionsList)}
			colTitles={tableTitles}
		/>
	)
}
