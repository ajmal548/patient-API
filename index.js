var express = require('express');
var app = express();
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/hospital');

app.set('views', 'index');
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

var patient = require("./router/patient");

app.use("/patient",patient);

app.listen(3000);