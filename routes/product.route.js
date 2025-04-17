const express = require('express');
const { addProduct, getProducts, getOne, getMyProducts, editProduct, deleteProduct } = require('../controllers/product.controller');
const isAuth = require('../middleware/isAuth');

const router = express.Router();


// Test Route
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Product route is working!' });
});

// Add Product Route
router.post('/addProd', isAuth, addProduct);
// All Products Route
router.get('/allProds', getProducts);
// My Products Route
router.get('/myProds', isAuth, getMyProducts);
// One Product Route
router.get('/:id', getOne); // Dynamic route to get a product by ID (must always be last one)
// Edit Product Route
router.put('/:id', isAuth, editProduct);
// Delete Product Route
router.delete('/:id', isAuth, deleteProduct);


module.exports = router;