import { type FC } from 'react'

import { DepartmentParticipantsTable } from './components/participants-table/participants-table'

export const RegDetailsParticipants: FC = () => {
	return (
		<div>
			<h2>Участники</h2>
			<DepartmentParticipantsTable />
			<p>111</p>
		</div>
	)
}
