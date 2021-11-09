const express = require('express')
const router = express.Router()
const controller  = require('../controllers/person_car_relation.controller')


// get all persons
router.get('/persons', controller.getAllPersons)

// get all cars
router.get('/cars', controller.getAllCars)

module.exports = router