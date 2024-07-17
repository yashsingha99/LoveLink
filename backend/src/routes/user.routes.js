const express = require("express");
const Router = express.Router();
const {
  register,
  login,
  getProfile,
  addFollowers,
  addfollowing,
  addBestMatches,
} = require("../controllers/user.controllers");

Router.post('/register', register)
Router.post('/login', login)
Router.post('/getProfile', getProfile)
Router.post('/addFollowers', addFollowers)
Router.post('/addfollowing', addfollowing)
Router.post('/addBestMatches', addBestMatches)

module.exports = { Router }