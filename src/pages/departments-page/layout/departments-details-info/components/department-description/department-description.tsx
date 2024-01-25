import { type FC } from 'react'
import styles from './index.module.scss'

export type DepartmentDescriptionProps = {
	descList?: string[]
}

export const DepartmentDescription: FC<DepartmentDescriptionProps> = ({ descList }) => {
	return (
		!!descList?.length && (
			<div className={styles.container}>
				{descList.map((item, index) => (
					<p className={styles.paragraph} key={index}>
						{item}
					</p>
				))}
			</div>
		)
	)
}
