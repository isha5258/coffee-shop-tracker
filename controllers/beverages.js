import { Checkin } from '../models/checkin.js'
import { Beverage } from '../models/beverage.js'

function index(req, res) {
  Beverage.find({})
  .then(beverages => {
  res.render('beverages/index', {
    title: 'Add beverages',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/beverages")
  })
}

export {
index,
}