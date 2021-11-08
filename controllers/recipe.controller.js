const express = require('express')
const pool = require('../db/recipe.db')

// get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const allRecipes = await pool.query('SELECT * FROM recipe ORDER BY id ASC')
        res.status(200).json(allRecipes)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// get recipe by id
exports.getRecipeById = async (req, res) => {
    const id = req.params.id
    try {
        const recipe = await pool.query('SELECT * FROM recipe WHERE id = $1', [id])
        res.status(200).json(recipe)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// edit recipe
exports.editRecipe = async (req, res) => {
    const id = req.params.id
    try {
        const name = req.body.name
        const ingredients = req.body.ingredients
        const updatedRecipe = await pool.query('UPDATE recipe SET name = $1, ingredients = $2 WHERE id = $3', [name, ingredients, id])
        res.status(200).json(updatedRecipe)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// create recipe
exports.createRecipe = async (req, res) => {
    try {
        const name = req.body.name
        const ingredients = req.body.ingredients
        const newRecipe = await pool.query('INSERT INTO recipe (name, ingredients) VALUES ($1, $2) RETURNING *', [name, ingredients])
        res.status(200).json(newRecipe)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// delete recipe
exports.deleteRecipe = async (req, res) => {
    const id = req.params.id
    try {
        const deletedRecipe = await pool.query('DELETE FROM recipe WHERE id = $1', [id])
        res.status(200).json(deletedRecipe)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}