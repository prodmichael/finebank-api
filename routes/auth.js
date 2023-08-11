const express = require('express')
const controller = require('../controllers/auth')
const passport = require('../middleware/passport')
const router = express.Router()

//  localhost:5000/api/auth/login
router.post('/login', controller.login)
//  localhost:5000/api/auth/register
router.post('/register', controller.register)

module.exports = router
