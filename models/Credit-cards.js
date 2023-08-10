const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
	img: {
		type: String,
		required: false,
	},
	name: {
		type: String,
		required: true,
	},
	number: {
		type: String,
		required: true,
		unique: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	// date: {
	// 	type: Date,
	// 	required: true,
	// },
	// code: {
	// 	type: Number,
	// 	required: true,
	// },
	user: {
		ref: 'users',
		type: Schema.Types.ObjectId,
	},
})

module.exports = mongoose.model('credit-card', cardSchema)
