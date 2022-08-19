const multer = require('multer');

const configMulter = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, 'uploads');
	},
	filename: (request, file, callback) => {
		console.log(file)
		const sufix = Date.now() + '-' + Math.round(Math.random() * 1E9);
		callback(null, file.originalname + '-' + sufix);
	}
});

const uploadImage = multer({storage: configMulter});

module.exports = uploadImage;