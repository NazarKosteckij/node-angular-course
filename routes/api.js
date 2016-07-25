
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Events = require('../models/events');
var Persons = require('../models/persons')

// Routes
Events.methods(['get', 'put', 'post', 'delete']);
Events.register(router, '/events');

Persons.methods(['get', 'put', 'post', 'delete']);
Persons.register(router, '/persons');

// Return router
module.exports = router;
