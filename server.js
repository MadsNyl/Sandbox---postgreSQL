require('dotenv').config()
const express = require('express')
const cors = require('cors')
const personRouter = require('./routes/person.route')
const recipeRouter = require('./routes/recipe.route')

// app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/person', personRouter)
app.use('/recipe', recipeRouter)

// init app
app.listen(process.env.PORT, console.log('App running'))