import { Checkin } from '../models/checkin.js'
import { Beverage } from '../models/beverage.js'

function index(req, res) {
  Beverage.find({})
  .then(beverage => {
  res.render('beverages/index', {
    title: 'Add beverages',
    beverage,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/beverages")
  })
}

function create (req, res) {
  req.body.owner = req.user.profile._id
  Beverage.create(req.body)
  .then(beverage => {
    console.log(req.body);
  res.redirect('/beverages')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/beverages")
  })
}


export {
index,
create,
}