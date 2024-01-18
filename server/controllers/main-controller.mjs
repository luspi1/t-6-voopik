import { regions } from '../mockData/regions.mjs'

export const getAllRegions = (req, res) => {
	res.status(200).json(regions)
}

export const getRegionByCode = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	res.status(200).json(foundRegion)
}
