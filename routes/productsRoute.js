const express = require('express');
const router = express.Router();
const {getProducts , updateProduct} = require('../controllers/poductsController');

router.get('/', getProducts)
router.put('/:id', updateProduct)

module.exports = router;