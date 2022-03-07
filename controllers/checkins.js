import { Checkin } from '../models/checkin.js'
import { Beverage } from '../models/beverage.js'

function index(req, res) {
  Checkin.find({})
  .populate('owner')
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
  Beverage.find({})
  .then(beverage => {
    res.render('checkins/new', {
    title: 'Add Check-In',
    beverage,
  })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/checkins")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.parking = !!req.body.parking
  console.log(req.body.beverage)
  Checkin.create(req.body)
  // .populate('beverage')
  .then(checkin => {
    res.redirect('/checkins')
  })
  .catch(err => {
    console.log(err)
    console.log(req.body.beverage);
    res.redirect('/checkins/new')
  })
}

function edit(req, res) {
  
}

export {
  index,
  newCheckin as new,
  create,
  edit
}