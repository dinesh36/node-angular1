//------------------Bhavnani Manishkumar ---------------------------------app.js[Stating File]-----------------------------------------------------------
// 1   Sales mate express object for interaction with express

var sales_mate_express = require('express');

// 2  Sales mate app object

var sales_mate_app = sales_mate_express();
var path = require('path');


// 3 Routing Enviornment for prouction, developement, stagging 

var sales_env = process.env.NODE_ENV || 'development';


//4 Sales mate routing configuration

var sales_config = require(__dirname + '/config/' + sales_env);


// 5 Body Parser

sales_mate_app.use(require('./api/users'));
var bodyParser = require('body-parser');
sales_mate_app.use(sales_mate_express.static('../client'));
sales_mate_app.use(bodyParser.urlencoded({extended: true}));
sales_mate_app.use(bodyParser.json());


// 5.1. api routing
//  Sales mate port listining
sales_mate_app.listen(sales_config.server.port);

console.log('"Dear Manishkumar Bhavnani your Salesmate App is Started on port ' + sales_config.server.port);

