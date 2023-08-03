const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const cardsRoutes = require('./routes/credit-cards')
const transactionsRoutes = require('./routes/transactions')
const app = express()

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/credit-cards', cardsRoutes)
app.use('/api/transactions', transactionsRoutes)

module.exports = app
