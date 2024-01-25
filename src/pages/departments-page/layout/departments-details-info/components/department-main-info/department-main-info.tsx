import { type FC } from 'react'
import cn from 'classnames'

import { formatPhoneNumber } from 'src/helpers/utils'
import styles from './index.module.scss'

export type DepartmentMainInfoProps = {
	fullTitle?: string
	type?: string
	logo?: string
	mainDesc?: string
	director?: string
	vice?: string
	accountant?: string
	phones?: string[]
	email?: string
	site?: string
	address?: string
	mainInfoLogo?: string
}

export const DepartmentMainInfo: FC<DepartmentMainInfoProps> = ({
	fullTitle,
	type,
	logo,
	mainDesc,
	director,
	vice,
	accountant,
	phones,
	email,
	site,
	address,
	mainInfoLogo,
}) => {
	return (
		<div className={styles.container}>
			{fullTitle && <h2>{fullTitle}</h2>}
			{type && <p className={styles.italic}>{type}</p>}

			<div className={styles.mainDescContainer}>
				<p className={styles.logoContainer}>{logo && <img src={logo} alt={fullTitle} />}</p>
				{mainDesc && <p className={styles.italic}>{mainDesc}</p>}
			</div>

			<div className={styles.table}>
				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Руководитель Отделения:</p>
					<a href='#'>{director ?? ''}</a>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Первый заместитель:</p>
					<p>{vice ?? ''}</p>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Главный бухгалтер:</p>
					<p>{accountant ?? ''}</p>
				</div>
			</div>

			<div className={styles.table}>
				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Телефоны:</p>
					<ul className={styles.phoneList}>
						{phones?.map((item: string) => (
							<li key={item}>
								<a href={'tel:' + formatPhoneNumber(item)}>{item}</a>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Электронная почта:</p>
					<a href={'mailto:' + email}>{email ?? ''}</a>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Сайт:</p>
					<a href={site}>{site ?? ''}</a>
				</div>

				<div className={styles.tableRow}>
					<p className={styles.tableTitle}>Адрес отделения:</p>
					<p>{address ?? ''}</p>
				</div>

				{mainInfoLogo && (
					<div className={cn(styles.tableRow, styles.mainInfoLogo)}>
						<p className={styles.tableTitle}>Логотип отделения:</p>
						<img src={mainInfoLogo} alt={fullTitle} />
					</div>
				)}
			</div>
		</div>
	)
}
