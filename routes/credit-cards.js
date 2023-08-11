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
router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	controller.getById
)
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	controller.delete
)
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	upload.single('png'),
	controller.create
)
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	upload.single('png'),
	controller.update
)

module.exports = router
