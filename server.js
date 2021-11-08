const express = require('express')
const cors = require('cors')
const personRouter = require('./routes/person.route')

// app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/person', personRouter)

// init app
app.listen(3000)