import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import styles from '../../index.module.scss'

export const ContactMap = () => (
	<div className={styles.contactMap}>
		<YMaps>
			<Map
				defaultState={{ center: [55.745032, 37.599139], controls: [], zoom: 17 }}
				options={{ suppressMapOpenBlock: true }}
				width='100%'
				height='100%'
			>
				<Placemark geometry={[55.745032, 37.599139]} />
			</Map>
		</YMaps>
	</div>
)
