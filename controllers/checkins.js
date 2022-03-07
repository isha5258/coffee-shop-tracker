import { Checkin } from '../models/checkin.js'
import { Beverage } from '../models/beverage.js'

function index(req, res) {
  Checkin.find({})
  .populate('owner')
  .populate('beverage')
  .then(checkins => {
    console.log(checkins);
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
  .then(beverages => {
    console.log('passed in', beverages);
    res.render('checkins/new', {
    title: 'Add Check-In',
    beverages,
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
  console.log(req.body)
  Checkin.create(req.body)
  // .populate('beverage')
  .then(checkin => {
  console.log(checkin)
  res.redirect('/checkins')
  })
  .catch(err => {
    console.log(err)
    console.log(req.body.beverage);
    res.redirect('/checkins/new')
  })
}

function edit(req, res) {
  Checkin.findById(req.params.id)
  .then(checkin => {
    res.render('/checkins/:id/edit'), {
      title: 'Edit Check-In',
      checkin
    }
  })
}

export {
  index,
  newCheckin as new,
  create,
  edit
}