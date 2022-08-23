const Product = require("../models/Product");

const saveProduct = async (req, res) => {
	const { name, description, price, quantity } = req.body;
	const product = new Product({
		name,
		description,
		price,
		quantity,
		image: req.file.filename,
	});

	try {
		const data = await product.save();
		res.status(200).json(data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const findAllProducts = async (req, res) => {
	try {
		const data = await Product.find();
		res.json(data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const findProductById = async (req, res) => {
	try {
		const id = req.params.id;
		const data = await Product.findById(id);
		res.json(data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const deleteProductById = async (req, res) => {
	try {
		const id = req.params.id;
		const data = await Product.findByIdAndDelete(id);
		res.send(`${data.name} has been deleted.`);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = {
	saveProduct,
	findAllProducts,
	findProductById,
	deleteProductById,
};
