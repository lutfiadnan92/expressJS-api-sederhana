//dependecies
var express = require('express'); 
var app = express();
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.json({name:"whoami iamwho"});
});

app.post('/', function(req,res){
	var name = req.body.name;
	var notelp = req.body.notelp;
	var agama = req.body.agama;
	var jenkel = req.body.jenkel;
	res.json({name:name,notelp:notelp,agama:agama,jenkel:jenkel});
});

app.listen(port);
console.log("Running on port 3000");