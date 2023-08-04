const express = require('express')
const passport = require('passport')
const controller = require('../controllers/category')
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
	upload.single('img'),
	controller.create
)
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	upload.single('img'),
	controller.update
)

module.exports = router
