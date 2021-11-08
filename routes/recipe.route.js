const express = require('express')
const router = express.Router()
const controller = require('../controllers/recipe.controller')

// get all recipes
router.get('/', controller.getAllRecipes)

// get recipe by id
router.get('/:id', controller.getRecipeById)

// create recipe
router.post('/', controller.createRecipe)

// edit recipe
router.put('/:id', controller.editRecipe)

// delete recipe
router.delete('/:id', controller.deleteRecipe)


module.exports = router