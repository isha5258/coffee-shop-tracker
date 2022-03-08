import { Router } from 'express'
import * as checkinsCtrl from '../controllers/checkins.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET - localhost:3000/checkins
router.get('/', checkinsCtrl.index)
// GET - localhost:3000/checkins/new
router.get('/new', isLoggedIn, checkinsCtrl.new)
// POST - localhost:3000/checkins
router.post('/', isLoggedIn, checkinsCtrl.create)
// GET - localhost:3000/checkins/:id/edit
router.get('/:id/edit', isLoggedIn, checkinsCtrl.edit )
// PUT - localhost:3000/checkins/:id
router.put('/:id', isLoggedIn, checkinsCtrl.update)
// Delete - localhost:3000/checkins/:id
router.delete('/:id', isLoggedIn, checkinsCtrl.delete)
export {
  router
}