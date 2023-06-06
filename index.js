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
var clinical = require("./router/Clinical");
var physician =require("./router/physician");
var demographicData = require("./router/demographic");
var AMD =require("./router/AMD");

app.use("/patient", patient);
app.use("/clinical", clinical);
app.use("/physician",physician);
app.use("/demographic", demographicData);
app.use("/amd",AMD);

app.listen(3000);