const controllers_products = require('../controllers/controllers_products'),
				    path = require('path');

module.exports = function(app){
	app.get('/api/products', controllers_products.get_all);

	app.get('/api/products/:id', controllers_products.get_one);

	app.post('/api/products', controllers_products.create);

	app.put('/api/products/:id', controllers_products.edit);

	app.delete('/api/products/:id', controllers_products.delete)

	app.all("*", (req,res,next) => {
  		res.sendFile(path.resolve("./public/dist/public/index.html"))
  	});
}