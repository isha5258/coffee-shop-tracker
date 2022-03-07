import { Router } from 'express'
import * as checkinsCtrl from '../controllers/checkins.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET - localhost:3000/checkins
router.get('/', checkinsCtrl.index)
// GET - localhost:3000/checkins/new
router.get('/new', checkinsCtrl.new)
// POST - localhost:3000/checkins
router.post('/', checkinsCtrl.create)
// GET - localhost:3000/checkins/:id/edit
router.get('/:id/edit', isLoggedIn, checkinsCtrl.edit )

export {
  router
}