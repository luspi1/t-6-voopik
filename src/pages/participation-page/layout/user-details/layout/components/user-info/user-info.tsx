import { useGetUserByIdQuery } from 'src/store/users/users.api'
import { formatDate1 } from 'src/helpers/utils'
import { useParams } from 'react-router-dom'
import { useActions } from 'src/hooks/actions/actions'
import { useEffect } from 'react'

export const UserInfo = () => {
	const { id } = useParams()
	const { data: userData } = useGetUserByIdQuery(id ?? '')

	const { setAdditionalCrumbs } = useActions()

	useEffect(() => {
		if (userData?.fullname) {
			setAdditionalCrumbs(userData.fullname)
		}
		return () => {
			setAdditionalCrumbs(null)
		}
	}, [userData])

	return (
		<div>
			<h2>{userData?.fullname}</h2>
			{userData?.statuses?.map((status) => <span key={status}>{status} </span>)}
			<p>{userData?.mainDesc}</p>
			<p>Дата рождения и возраст:</p>
			<p>{formatDate1(userData?.birthday)}</p>
		</div>
	)
}
