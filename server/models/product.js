const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	//_id: {"_id", seq: 0},
	name: {type: String, required: [true, 'Name must be valid'], minlength: 3},
	qty: {type: Number, required: [true, 'Quantity must be at least 0'], min: [0, 'Quantity must be at least 0']},
	price: {type: Number, required: [true, 'Product must have a price of at least 0'], min: [0, 'Product must have a price of at least 0']}
}, {timestamps: true})



module.exports.Product = mongoose.model('Product', ProductSchema);

