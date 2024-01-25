import { type FC } from 'react'
import cn from 'classnames'

import { formatPhoneNumber } from 'src/helpers/utils'
import styles from './index.module.scss'
import { type RegionItem } from 'src/types/regions'

export type DepartmentMainInfoProps = {
	data: RegionItem
	className?: string
}

export const DepartmentMainInfo: FC<DepartmentMainInfoProps> = ({ data, className }) => {
	return (
		<div className={cn(className, styles.mainInfoContainer)}>
			<h2>{data.fullTitle}</h2>
			<p className={styles.italic}>{data.type}</p>

			<div className={styles.mainDescContainer}>
				<p className={styles.logoContainer}>
					<img src={data.logo} alt={data.fullTitle} />
				</p>

				<p className={styles.italic}>{data.mainDesc}</p>
			</div>

			<div className={styles.table}>
				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Руководитель Отделения:</p>
					<a href='#'>{data.director}</a>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Первый заместитель:</p>
					<p>{data.vice}</p>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Главный бухгалтер:</p>
					<p>{data.accountant}</p>
				</div>
			</div>

			<div className={styles.table}>
				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Телефоны:</p>
					<ul className={styles.phoneList}>
						{data.phones.map((item: string) => (
							<li key={item}>
								<a href={'tel:' + formatPhoneNumber(item)}>{item}</a>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Электронная почта:</p>
					<a href={'mailto:' + data.email}>{data.email}</a>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Сайт:</p>
					<a href={data.site}>{data.site}</a>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Адрес отделения:</p>
					<p>{data.address}</p>
				</div>

				{data.mainInfoLogo && (
					<div className={cn(styles.tableRow, styles.mainInfoLogo)}>
						<p className={styles.tableTitle}>Логотип отделения:</p>
						<img src={data.mainInfoLogo} alt={data.fullTitle} />
					</div>
				)}
			</div>
		</div>
	)
}
