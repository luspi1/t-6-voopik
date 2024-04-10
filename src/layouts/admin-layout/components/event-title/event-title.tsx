import { type FC } from 'react'

import styles from './index.module.scss'

type EventTitleProps = {
	title: string
	dates: [string, string]
	address: string
}

export const EventTitle: FC<EventTitleProps> = ({ title, dates, address }) => {
	return (
		<div className={styles.eventTitle}>
			<h2>{title}</h2>
			<p>
				{dates[0]} — {dates[1]}, {address}
			</p>
		</div>
	)
}
