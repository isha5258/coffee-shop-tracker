import { Router } from 'express'
import * as checkinCtrl from '../controllers/checkins.js'

const router = Router()


// GET - localhost:3000/checkins

router.get('/', checkinCtrl.index)



export {
  router
}