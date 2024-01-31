import { regions } from '../mockData/regions.mjs'
import { users } from '../mockData/users.mjs'
import { objects } from '../mockData/objects.mjs'
import { projects } from '../mockData/projects.mjs'

export const getRegions = (req, res) => {
	const { q } = req.query

	const filteredRegions = regions.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredRegions)
}

export const getRegionParticipants = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const regionParticipants = foundRegion.participants
	res.status(200).json(regionParticipants)
}

export const getRegionEvents = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const regionEvents = foundRegion.events
	res.status(200).json(regionEvents)
}

export const getRegionByCode = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)

	res.status(200).json(foundRegion)
}

export const getUsers = (req, res) => {
	const { q } = req.query

	const filteredUsers = users.filter((el) => el.fullname.toLowerCase().includes(q))

	res.status(200).json(filteredUsers)
}
export const getUserById = (req, res) => {
	const userId = req.params.id
	const foundUser = users.find((user) => user.id === userId)

	res.status(200).json(foundUser)
}
export const getUsersGroup = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredGroups = searchedUser.groups.filter((group) =>
		group.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredGroups)
}
export const getUsersEvent = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredEvents = searchedUser.events.filter((event) =>
		event.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredEvents)
}
export const getUsersProject = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredProjects = searchedUser.projects.filter((project) =>
		project.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredProjects)
}
export const getUsersObject = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredObjects = searchedUser.objects.filter((object) =>
		object.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredObjects)
}
export const getUsersPhotos = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredPhotos = searchedUser.photos.filter((photo) =>
		photo.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredPhotos)
}
export const getUsersVideos = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredVideos = searchedUser.videos.filter((video) =>
		video.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredVideos)
}
export const getObjects = (req, res) => {
	const {q} = req.query

	const filteredObjects = objects.filter(el => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredObjects)
}

export const getObjectById = (req, res) => {
	const objectId = req.params.id
	const foundObject = objects.find((object) => object.id === objectId )

	res.status(200).json(foundObject)
}
export const getProjects = (req, res) => {
	const {q} = req.query

	const filteredProjects = projects.filter(el => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredProjects)
}

export const getProjectById = (req, res) => {
	const projectId = req.params.id
	const foundProject = projects.find((project) => project.id === projectId )

	res.status(200).json(foundProject)
}