const express = require('express')
const pool = require('../db/person_car_relation.db')

// get all persons
exports.getAllPersons = async (req, res) => {
    try {
        allPersons = await pool.query('SELECT * FROM person ORDER BY id')
        res.status(200).json(allPersons)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// add car to person
exports.addCarToPerson = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// create person
exports.createPerson = async (req, res) => {
    try {
        const first_name = req.body.first_name
        const last_name = req.body.last_name
        const car_id = req.body.car_id
        const newPerson = await pool.query('INSERT INTO person (first_name, last_name, car_id) VALUES ($1, $2, $3)', [first_name, last_name, car_id])
        res.status(200).json(newPerson)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// create car
exports.createCar = async (req, res) => {
    
}

// get all cars
exports.getAllCars = async (req, res) => {
    try {
        allCars = await pool.query('SELECT * FROM car ORDER BY id')
        res.status(200).json(allCars)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}