import { Checkin } from '../models/checkin.js'


function index() {
  Checkin.find({})
  .then(checkins => {
    res.render('checkins/index', {
      title: 'All Checkins',
      checkins
    })
  })
}

export {
  index,
}