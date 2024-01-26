import { type FC } from 'react'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
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
				{logo && (
					<p className={styles.logoContainer}>
						<img src={logo} alt={fullTitle} />
					</p>
				)}
				{mainDesc && <p className={styles.italic}>{mainDesc}</p>}
			</div>

			<div className={styles.table}>
				<InfoRow title='Руководитель Отделения:' label={<a href='#'>{director}</a>} margin='0' />
				<InfoRow title='Первый заместитель:' label={vice} margin='0' />
				<InfoRow title='Главный бухгалтер:' label={accountant} margin='0' />
			</div>

			<div className={styles.table}>
				<InfoRow title='Телефоны:' label={phones} wrapperClassname={styles.phoneList} margin='0' />
				<InfoRow
					title='Электронная почта:'
					label={<a href={'mailto:' + email}>{email}</a>}
					margin='0'
				/>
				<InfoRow title='Сайт:' label={<a href={site}>{site}</a>} margin='0' />
				<InfoRow title='Адрес отделения:' label={address} margin='0' />
				<InfoRow
					title='Логотип отделения:'
					label={<img src={mainInfoLogo} alt={fullTitle} />}
					wrapperClassname={styles.mainInfoLogo}
					margin='0'
				/>
			</div>
		</div>
	)
}
