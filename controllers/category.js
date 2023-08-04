const { response } = require('../app')
const Category = require('../models/Category')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
	try {
		const categories = await Category.find({ user: req.user.id })
		res.status(200).json(categories)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getById = async function (req, res) {
	try {
		const category = await Category.findById(req.params.id)
		res.status(200).json(category)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.delete = async function (req, res) {
	try {
		await Category.delete({ _id: req.params.id })
		res.status(200).json({
			message: 'Category delete',
		})
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.create = async function (req, res) {
	const category = new Category({
		name: req.body.name,
		img: req.file ? req.file.path : '',
		price: req.body.price,
		// user: req.user.id,
	})
	try {
		await category.save()
		res.status(201).json(category)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.update = async function (req, res) {
	const updated = {
		name: req.body.name,
		price: req.body.price,
	}
	if (req.file) {
		updated.img = req.file.path
	}

	try {
		const category = await Category.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: updated },
			{ new: true }
		)
		response.status(200).json(category)
	} catch (e) {
		errorHandler(res, e)
	}
}
