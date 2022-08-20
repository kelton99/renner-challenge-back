const express = require('express');
const Product = require('../models/Product');
const uploadImage = require('../config/multer');

const router = express.Router();

router.post('/products', uploadImage.single("image"), async (req, res) => {
	const { name, description, price, quantity } = req.body;
	const product = new Product({
		name,
		description,
		price,
		quantity,
		image: req.file.filename
	});

	try {
		const data = await product.save();
		res.status(200).json(data)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}

});

router.get('/products', async (req, res) => {
	
	try {
		const data = await Product.find();
		res.json(data)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}

});

router.get('/products/images/:path', (req, res) => {
	res.download('./uploads/' + req.params.path);
});

router.get('/products/:id', async (req, res) => {
	
	try {
		const id = req.params.id;
		const data = await Product.findById(id);
		res.json(data)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}

});

router.delete('/products/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const data = await Product.findByIdAndDelete(id);
		res.send(`${data.name} has been deleted.`);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;