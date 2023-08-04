const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const cardsRoutes = require('./routes/credit-cards')
const transactionsRoutes = require('./routes/transactions')
const keys = require('./config/keys')
const app = express()

mongoose
	.connect(keys.mongoURI)
	.then(() => console.log('MongoDb connected'))
	.catch((error) => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/upload', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/credit-cards', cardsRoutes)
app.use('/api/transactions', transactionsRoutes)

module.exports = app
