const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionsSchema = new Schema({
	date: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		default: '',
	},
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	user: {
		ref: 'users',
		type: Schema.Types.ObjectId,
	},
})

module.exports = mongoose.model('transactions', transactionsSchema)
