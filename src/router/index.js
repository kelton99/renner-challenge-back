const express = require('express');
const uploadImage = require('../config/multer');
const { saveProduct, findAllProducts, findProductById, deleteProductById } = require('../service/ProductService');

const router = express.Router();

router.post('/products', uploadImage.single("image"), saveProduct);

router.get('/products', findAllProducts);

router.get('/products/images/:path', (req, res) => {
	res.download('./uploads/' + req.params.path);
});

router.get('/products/:id', findProductById);

router.delete('/products/:id', deleteProductById);

module.exports = router;