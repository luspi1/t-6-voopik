import { regions } from '../mockData/regions.mjs'

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
