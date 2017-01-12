var mongoose=require('mongoose');
var sales_mate_development=require('../config/development.js');

var con =mongoose.connect(sales_mate_development.mongo.url);

module.exports = mongoose;
