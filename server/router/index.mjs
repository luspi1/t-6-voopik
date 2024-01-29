import {
	getRegionByCode,
	getRegions,
	getUserById,
	getUsers,
	getUsersEvent,
	getUsersGroup
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/regions', getRegions)
router.get('/regions/:code', getRegionByCode)
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.get('/users/:id/group', getUsersGroup)
router.get('/users/:id/event', getUsersEvent)

