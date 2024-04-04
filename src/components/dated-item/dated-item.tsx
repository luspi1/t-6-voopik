import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { customFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type DatedItemProps = {
	id: string
	date: string
	prevDate: string
	previewImage: string
	title: string
	desc: string
}
export const DatedItem: FC<DatedItemProps> = ({
	id,
	date,
	prevDate,
	previewImage,
	title,
	desc,
}) => {
	const currentMonth = new Date(date).getMonth()
	const prevMonth = new Date(prevDate).getMonth()
	const currentYear = new Date(date).getFullYear()

	return (
		<>
			{currentMonth !== prevMonth && (
				<li className={styles.titleMonth}>
					<span>{customFormatDate(date, { month: 'long' })},</span> {currentYear}
				</li>
			)}
			<li className={styles.datedItem} key={id}>
				<Link className={styles.datedItemInner} to={id}>
					<span className={styles.dateInfo}>
						{customFormatDate(date, { day: 'numeric', month: 'long' })}
					</span>
					<div className={styles.datedItemContent}>
						<h5>{title}</h5>
						<p>{desc}</p>
					</div>
					<div className={styles.datedItemImg}>
						<img src={previewImage} alt={title} />
					</div>
				</Link>
			</li>
		</>
	)
}
