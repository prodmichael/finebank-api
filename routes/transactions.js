const express = require('express')
const controller = require('../controllers/transactions')
const router = express.Router()

router.get('/transactions', controller.getAll)

module.exports = router
