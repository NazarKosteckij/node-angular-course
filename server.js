
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/eventsList');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Frontend
app.use('/', express.static('./frontend/app'));

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(8000);
console.log('API is running on port 8000');
