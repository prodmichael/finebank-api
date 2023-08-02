module.exports.login = function (req, res) {
	res.status(200).json({
		login: 'fromcontroller',
	})
}

module.exports.register = function (req, res) {
	res.status(200).json({
		register: 'from controller',
	})
}
