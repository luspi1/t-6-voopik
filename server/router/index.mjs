import {
	getRegionByCode,
	getRegions,
	getUserById,
	getUsers,
	getUsersEvent,
	getUsersGroup, getUsersObject, getUsersProject
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

