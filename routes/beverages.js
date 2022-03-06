import { Router } from 'express'
import * as beveragesCtrl from '../controllers/beverages.js'

const router = Router()

// GET - localhost:3000/beverages
router.get('/', beveragesCtrl.index)

export {
  router
}