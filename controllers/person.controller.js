const express = require('express')
const pool = require('../db/person.db')


// get all persons
exports.getAllPersons = async (req, res) => {
    try{
        allPersons = await pool.query('SELECT * FROM person ORDER BY id ASC')
        res.status(200).json(allPersons)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// get person by id
exports.getPersonById = async (req, res) => {
    const id = req.params.id
    try{
        const person = await pool.query('SELECT * FROM person WHERE id = $1', [id])
        res.status(200).json(person.rows[0])
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// get person by first name
exports.getPersonByName = async (req, res) => {
    const query = req.query.q
    console.log(query)
    try{
        const person = await pool.query('SELECT * FROM person WHERE firstname LIKE $1', [query])
        res.status(200).json(person)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// create person
exports.createPerson = async (req, res) => {
    try{
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const age = req.body.age
        const newPerson = await pool.query('INSERT INTO person (firstname, lastname, age) VALUES ($1, $2, $3) RETURNING *', [firstname, lastname, age])
        res.status(200).json(newPerson)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// update person
exports.updatePerson = async (req, res) => {
    const id = req.params.id
    try{
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const age = req.body.age
        const updatedPerson = await pool.query('UPDATE person SET firstname = $1, lastname = $2, age = $3 WHERE id = $4', [firstname, lastname, age, id])
        res.status(200).json(updatedPerson)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// delete person
exports.deletePerson = async (req, res) => {
    const id = req.params.id
    try {
        deletedPerson = await pool.query('DELETE FROM person WHERE id = $1', [id])
        res.status(200).json(this.deletedPerson)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}