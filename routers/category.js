const { createCategory, getCategories } = require('../controllers/categories/categories.controllers');
const router = require('express').Router();
//categories
router.post("/create", createCategory)
router.get("/list", getCategories)

module.exports = router