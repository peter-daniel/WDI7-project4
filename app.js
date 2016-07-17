var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
// Load  routes.
var routes = require('./config/route');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/waiting_list');
// Create the application.
app.use(routes);
// Load the models.
app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
