import { type FC } from 'react'

import { DirectionPerson } from '../direction-person/direction-person'
import { viceChairmans } from './consts'
import styles from './index.module.scss'

export const ViceChairmansSection: FC = () => {
	return (
		<div>
			<h3>Заместители председателя</h3>
			<ul className={styles.viceDirectionList}>
				{viceChairmans.map((item) => (
					<li key={item.id}>
						<DirectionPerson image={item.image} name={item.name} position={item.position} />
					</li>
				))}
			</ul>
		</div>
	)
}
