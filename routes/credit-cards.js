const express = require('express')
const passport = require('passport')
const controller = require('../controllers/credit-cards')
const upload = require('../middleware/upload')
const router = express.Router()

router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	controller.getAll
)
router.get('/:id', controller.getById)
router.delete('/:id', controller.delete)
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	upload.single('png'),
	controller.create
)
router.patch('/:id', controller.update)

module.exports = router
