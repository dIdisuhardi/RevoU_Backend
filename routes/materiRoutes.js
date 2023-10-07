const express = require('express');
const materiRoutes = express.Router();
const { prisma } = require('../config/prisma');
const { getMateriController, getMateriByIdController, getMateriByCategoryController, createMateriController } = require('../controller/materiController');

materiRoutes.get('/', getMateriController)

materiRoutes.post('/', createMateriController)

materiRoutes.get("/:id", getMateriByIdController)

materiRoutes.get("/:category", getMateriByCategoryController)

module.exports = { productRoutes }