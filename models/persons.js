
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var personsSchema = new mongoose.Schema({
    firstName: String,
   	lastName: String,
    email: String,
   	dateOfBirth:Date
});

// Return model
module.exports = restful.model('Persons', personsSchema);
