import { type FC } from 'react'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'

type UserDetailsProps = {
	statuses?: string[]
	relatedObjects?: string[]
	relatedProjects?: string[]
}
export const UserDetails: FC<UserDetailsProps> = ({
	statuses,
	relatedObjects,
	relatedProjects,
}) => {
	return (
		<div>
			<section>
				<InfoRow title='Статусы Пользователя:' label={statuses} />
				<InfoRow title='Связь с Объектами:' label={relatedObjects} />
				<InfoRow title='Связь с Проектами:' label={relatedProjects} />
			</section>
		</div>
	)
}
