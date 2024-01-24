import { regions } from '../mockData/regions.mjs'
import { users } from '../mockData/users.mjs'

export const getRegions = (req, res) => {
	const {q} = req.query

	const filteredRegions = regions.filter(el => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredRegions)
}


export const getRegionByCode = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)

	res.status(200).json(foundRegion)
}

export const getUsers= (req, res) => {
	const {q} = req.query

	const filteredUsers = users.filter(el => el.fullname.toLowerCase().includes(q))

	res.status(200).json(filteredUsers)
}

export const getUserById = (req, res) => {
	const userId = req.params.id
	const foundUser = users.find((user) => user.id === userId )

	res.status(200).json(foundUser)
}