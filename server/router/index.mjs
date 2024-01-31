import {
	getObjectById,
	getObjects,
	getProjectById,
	getProjects,
	getRegionByCode,
	getRegions,
	getUserById,
	getUsers,
	getUsersEvent,
	getUsersGroup,
	getUsersObject,
	getUsersPhotos,
	getUsersProject,
	getUsersVideos
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/regions', getRegions)
router.get('/regions/:code', getRegionByCode)
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.get('/users/:id/group', getUsersGroup)
router.get('/users/:id/event', getUsersEvent)
router.get('/users/:id/project', getUsersProject)
router.get('/users/:id/object', getUsersObject)
router.get('/users/:id/photo', getUsersPhotos)
router.get('/users/:id/video', getUsersVideos)
router.get('/objects', getObjects)
router.get('/objects/:id', getObjectById)
router.get('/projects', getProjects)
router.get('/projects/:id', getProjectById)

