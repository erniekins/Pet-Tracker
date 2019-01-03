const express = require('express'),
	  app = express(),
	  path = require('path'),
	  mongoose = require('./server/config/mongoose.js'),
	  bodyParser = require('body-parser'),
	  port = 8000;

app.use(express.static(path.join(__dirname, 'public', 'dist', 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/routes.js')(app);

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
})
