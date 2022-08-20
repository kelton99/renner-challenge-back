const multer = require('multer');

const configMulter = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, 'uploads');
	},
	filename: (request, file, callback) => {
		callback(null, file.originalname);
	}
});

const uploadImage = multer({storage: configMulter});

module.exports = uploadImage;