import {
	getAllRegions,
	getRegionByCode
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/regions', getAllRegions)
router.get('/regions/:code', getRegionByCode)

