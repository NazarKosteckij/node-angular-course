
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var eventsSchema = new mongoose.Schema({
    name: String,
   	date: String,
    time: String,
   	participants: Array,
   	ovner: String
});

// Return model
module.exports = restful.model('Events', eventsSchema);
