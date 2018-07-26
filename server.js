// server.js

// modules
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser'); 
var methodOverride = require('method-override');

// configuration

// config files
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

// connect to mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data

