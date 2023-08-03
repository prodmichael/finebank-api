const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
	img: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	number: {
		type: Number,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		required: true,
	},
	code: {
		type: Number,
		required: true,
	},
	user: {
		ref: 'users',
		type: Schema.Types.ObjectId,
	},
})

module.exports = mongoose.model('cards', cardSchema)
