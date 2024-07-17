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
Router.get('/getProfile', getProfile)
Router.patch('/addFollowers', addFollowers)
Router.patch('/addfollowing', addfollowing)
Router.patch('/addBestMatches', addBestMatches)

module.exports = { Router }