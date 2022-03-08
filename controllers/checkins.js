import { Checkin } from '../models/checkin.js'
import { Beverage } from '../models/beverage.js'

function index(req, res) {
  Checkin.find({})
  .populate('owner')
  .populate('beverage')
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
  .then(beverages => {
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
  Checkin.create(req.body)
  // .populate('beverage')
  .then(checkin => {
  res.redirect('/checkins')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/checkins/new')
  })
}

function edit(req, res) {
  Beverage.find({})
  .then(beverages => {
  Checkin.findById(req.params.id)
  .then(checkin => {
    res.render('checkins/edit', {
      title: 'Edit Check-In',
      checkin,
      beverages,
    })
  })
})
  .catch(err => {
    console.log(err)
    res.redirect("/checkins")
  })
}

function update(req, res) {
  req.body.parking = !!req.body.parking
  Checkin.findByIdAndUpdate(req.params.id, req.body)
  .then(checkin => {
      res.redirect('/checkins')
      })
  .catch(err => {
    console.log("the error:", err)
    res.redirect("/checkins")
  })
}

function deleteCheckin(req, res) {
  console.log('delete sanity')
}


export {
  index,
  newCheckin as new,
  create,
  edit,
  update,
  deleteCheckin as delete
}