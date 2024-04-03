import { type FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { customFormatDate } from 'src/helpers/utils'

type DatedItemProps = {
	id: string
	date: string
	previewImage: string
	title: string
	desc: string
}
export const DatedItem: FC<DatedItemProps> = ({ id, date, previewImage, title, desc }) => {
	return (
		<li className={styles.datedItem} key={id}>
			<Link className={styles.datedItemInner} to={id}>
				<span className={styles.dateInfo}>
					{customFormatDate(date, { day: 'numeric', month: 'long' })}
				</span>
				<div>
					<h5>{title}</h5>
					<p>{desc}</p>
				</div>
				<div className={styles.datedItemImg}>
					<img src={previewImage} alt={title} />
				</div>
			</Link>
		</li>
	)
}
