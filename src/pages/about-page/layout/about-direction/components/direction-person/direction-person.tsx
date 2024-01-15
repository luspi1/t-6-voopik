import { type FC } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'

export type DirectionPersonProps = {
	image: string
	name: string
	position: string
	isMainChairman?: boolean
}

export const DirectionPerson: FC<DirectionPersonProps> = ({
	image,
	name,
	position,
	isMainChairman,
}) => {
	return (
		<figure className={styles.personContainer}>
			<img src={image} alt={name} />
			<figcaption>
				<p className={cn(styles.personName, isMainChairman ? styles.isMainChairman : '')}>{name}</p>
				<p className={styles.personPosition}>{position}</p>
			</figcaption>
		</figure>
	)
}
