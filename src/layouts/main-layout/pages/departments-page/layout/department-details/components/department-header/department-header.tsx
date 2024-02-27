import { type FC } from 'react'

import { useParams } from 'react-router-dom'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'

import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import styles from './index.module.scss'

export const DepartmentHeader: FC = () => {
	const { id } = useParams()

	const { data: regionData } = useGetRegionByCodeQuery(id ?? '')

	useAdditionalCrumbs(regionData?.fullTitle)

	return (
		<div className={styles.departmentHeader}>
			{regionData?.fullTitle && <h2>{regionData?.fullTitle}</h2>}
			{regionData?.type && <p className={styles.italic}>{regionData?.type}</p>}

			<div className={styles.mainDescContainer}>
				{regionData?.logo && (
					<p className={styles.logoContainer}>
						<img src={regionData?.logo} alt={regionData?.fullTitle} />
					</p>
				)}
				{regionData?.mainDesc && <p className={styles.italic}>{regionData?.mainDesc}</p>}
			</div>
		</div>
	)
}
