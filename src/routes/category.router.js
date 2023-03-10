const express = require('express');
const { categoryControler } = require('../controllers');
const { nameCategoryRequired } = require('../middlewares/category.middlewares');
const validateToken = require('../middlewares/validateAccess');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, nameCategoryRequired, categoryControler.createCategory);

module.exports = categoryRouter;