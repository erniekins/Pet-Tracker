const Schemas = require('../models/product'),
		Product = Schemas.Product;

module.exports = {
	get_all: function(req, res){
		Product.find({}, function(err, products) {
			if(err){
				res.json(err);
			}
			else {
				res.json({message:'Got all the things!', products:products})
			}
		})
	},

	get_one: function(req, res){
		Product.findById(req.params.id, function(err, product){
			if(err){
				res.json({error: err})
			}
			else {
				res.json({message: 'Got THE thing', product:product})
			}
		})
	},

	create: function(req, res){
		var product = new Product({
			name: req.body.name,
			qty: req.body.qty,
			price: req.body.price
		})
		product.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				res.json({message: "Success!", data: product})
			}
		})
	},

	edit: function(req, res){
		console.log(req.body)
		Product.findOne({_id: req.params.id}, function(err, product){
			product.name = req.body.name;
			product.price = req.body.price;
			product.qty = req.body.qty;
			product.save(function(err){
				if(err){
					res.json(err)
				}
				else{ 
					console.log(product, 'Am i editing?')
					res.json({data: product, err: err})
				}
			})
		})
	},

	delete: function(req, res){
		Product.remove({_id: req.params.id}, function(err, product){
			if(err){
				res.json(err)
			}
			else{
				res.json({message: 'Successfully destroyed', data:product})
			}
		})
	}
}