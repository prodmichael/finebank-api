const express = require('express')
const controller = require('../controllers/credit-cards')
const router = express.Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.delete)
router.post('/', controller.create)
router.patch('/:id', controller.update)

module.exports = router
