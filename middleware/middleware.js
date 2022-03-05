import req from "express/lib/request"
import res = require("express/lib/response")

fucntion passUserToView(req, res, next) {
  res.local.user = req.user ? req.user : null
  next()
}

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated())
  return next()
  res.redirect('/auth/google')
}

export {
  passUserToView,
  isLoggedIn,
}