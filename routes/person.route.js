const express = require('express')
const router = express.Router()
const controller = require('../controllers/person.controller')


// get all persons
router.get('/', controller.getAllPersons)

// get person by id
router.get('/:id', controller.getPersonById)

// get person by first name
router.get('/', controller.getPersonByName)

// create person
router.post('/', controller.createPerson)

// update person
router.put('/:id', controller.updatePerson)

// delete person
router.delete('/:id', controller.deletePerson)


module.exports = router