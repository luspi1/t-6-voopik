import { type FC } from 'react'

import { DirectionPerson } from '../direction-person/direction-person'
import { chairmans } from './consts'
import styles from './index.module.scss'

export const ChairmansSection: FC = () => {
	return (
		<div className={styles.chairmanSection}>
			<h3>Председатели</h3>

			<ul className={styles.directionList}>
				{chairmans.map((item) => (
					<li key={item.id}>
						<DirectionPerson
							image={item.image}
							name={item.name}
							position={item.position}
							isMainChairman={item.isMainChairman}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
