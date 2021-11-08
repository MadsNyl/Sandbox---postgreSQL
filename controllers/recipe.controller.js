const express = require('express')
const pool = require('../db/recipe.db')

// get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        allRecipes = await pool.query('SELECT * FROM recipe ORDER BY id ASC')
        res.status(200).json(allRecipes)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// create recipe
exports.createRecipe = async (req, res) => {
    try {
        const name = req.body.name
        const ingredients = req.body.ingredients
        const newRecipe = await pool.query('INSERT INTO recipe (name, ingredients) VALUES ($1, ARRAY $2) RETURNING *', [name, ingredients])
        res.status(200).json(newRecipe)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}