import { type FC } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import styles from './index.module.scss'
import cn from 'classnames'

export type ContactsMapProps = {
	points: number[]
	zoom: number
	className?: string
}

export const ContactsMap: FC<ContactsMapProps> = ({ points, zoom, className }) => (
	<div className={cn(styles.contactMap, className)}>
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
