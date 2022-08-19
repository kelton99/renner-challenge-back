const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	
	name: {
		required: true,
		type: String
	},
	description: {
		required: true,
		type: String
	},
	price: {
		required: true,
		type: Number
	},
	quantity: {
		required: true,
		type: Number
	},
	image: {
		type: String
	}

});

module.exports = mongoose.model('Product', productSchema);