import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { DepartmentParticipantsTable } from './components/participants-table/participants-table'
import { useGetRegionParticipantsQuery } from 'src/store/regions/regions.api'
import styles from './index.module.scss'

export const RegDetailsParticipants: FC = () => {
	const { id } = useParams()
	const { data: participants } = useGetRegionParticipantsQuery(['', id ?? ''])

	return (
		participants && (
			<div className={styles.participantsTablePage}>
				<h2 className={styles.title}>Участники</h2>
				<p className={styles.participantsCount}>Персон в составе: {participants.length}</p>
				<DepartmentParticipantsTable />
			</div>
		)
	)
}
