import { Router } from 'express'
import * as beveragesCtrl from '../controllers/beverages.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/beverages
router.get('/', isLoggedIn, beveragesCtrl.index)

// POST - localhost:3000/beverages
router.post('/', isLoggedIn, beveragesCtrl.create)

export {
  router
}