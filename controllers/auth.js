const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')

module.exports.login = async function (req, res) {
	// Провера email
	const candidate = await User.findOne({ email: req.body.email })
	if (candidate) {
		// User существует
		const passwordResult = bcrypt.compareSync(
			req.body.password,
			candidate.password
		)
		if (passwordResult) {
			// создание токена, защита токена, время активности
			const token = jwt.sign(
				{
					email: candidate.email,
					userId: candidate._id,
				},
				keys.jwt,
				{ expiresIn: 60 * 60 }
			)

			res.status(200).json({
				token: `Bearer ${token}`,
			})
		} else {
			// пароль не найден
			res.status(401).json({
				message: 'Password not found',
			})
		}
	} else {
		// Email не существует
		res.status(404).json({
			massage: 'Email not found',
		})
	}
}

module.exports.register = async function (req, res) {
	// test
	// const user = new User({
	// 	name: req.body.name,
	// 	email: req.body.email,
	// 	password: req.body.password,
	// })
	// user.save().then(() => console.log('User created'))

	// name, email, password
	// Ищем совпадение в базе
	const candidate = await User.findOne({ email: req.body.email })

	if (candidate) {
		// User существует, отправить ошибку
		res.status(409).json({
			message: 'Email is busy',
		})
	} else {
		// Создание User (защищаем пароль хэширование)
		const salt = bcrypt.genSaltSync(10)
		const password = req.body.password
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync(password, salt),
		})

		try {
			await user.save()
			res.status(201).json(user)
		} catch (e) {
			// Обработка ошибки
		}
	}
}
