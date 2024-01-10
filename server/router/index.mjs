import { getAllTracks } from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/getTracks', getAllTracks)

