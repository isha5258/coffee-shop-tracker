import { Router } from 'express'
import * as checkinsCtrl from '../controllers/checkins.js'

const router = Router()


// GET - localhost:3000/checkins

router.get('/', checkinsCtrl.index)


export {
  router
}