const { response } = require('../app')
const CreditCard = require('../models/Credit-cards')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
	try {
		const creditCards = await CreditCard.find({ user: req.user.id })
		res.status(200).json(creditCards)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getById = async function (req, res) {}

module.exports.delete = async function (req, res) {}

module.exports.create = async function (req, res) {
	const creditCard = new CreditCard({
		img: req.file ? req.file.path : '',
		name: req.body.name,
		number: req.body.number,
		amount: req.body.amount,
	})
	try {
		await creditCard.save()
		res.status(201).json(creditCard)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.update = async function (req, res) {}
