import {
	getRegionByCode, getRegions, getUserById, getUsers
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/regions', getRegions)
router.get('/regions/:code', getRegionByCode)
router.get('/users', getUsers)
router.get('/users/:id', getUserById)

