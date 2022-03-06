import { Checkin } from '../models/checkin.js'
import { Beverage } from '../models/beverage.js'

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

function newCheckin(req, res) {
  res.render('checkins/new', {
    title: 'Add Check-In',

  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.parking = !!req.body.parking
  Checkin.create(req.body)
  .then(checkin => {
    res.redirect('/checkins')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/checkins')
  })
}

export {
  index,
  newCheckin as new,
  create
}