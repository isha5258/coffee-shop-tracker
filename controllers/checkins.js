import { Checkin } from '../models/checkin.js'


function index(req, res) {
  Checkin.find({})
  .then(checkins => {
    res.render('checkins/index', {
      title: 'All Checkins',
      checkins,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/checkins")
  })
}

export {
  index,
}