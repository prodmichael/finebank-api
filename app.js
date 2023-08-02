const express = require('express')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const cardsRoutes = require('./routes/credit-cards')
const transactionsRoutes = require('./routes/transactions')
const app = express()

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/credit-cards', cardsRoutes)
app.use('/api/transactions', transactionsRoutes)

module.exports = app
