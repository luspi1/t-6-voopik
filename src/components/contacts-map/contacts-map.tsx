import { type FC } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import styles from './index.module.scss'

export type ContactsMapProps = {
	points: number[]
	zoom: number
}

export const ContactsMap: FC<ContactsMapProps> = ({ points, zoom }) => (
	<div className={styles.contactMap}>
		<YMaps>
			<Map
				defaultState={{ center: points, controls: [], zoom }}
				options={{ suppressMapOpenBlock: true }}
				width='100%'
				height='100%'
			>
				<Placemark geometry={points} />
			</Map>
		</YMaps>
	</div>
)
