var mongoose=require('mongoose');

var con = require('../../../connection_utils/sales_mate_mongoose_connect.js');
var schema = {  
			pid:'string',
			pname:'string',
			ptype:'string',
			prate:'string'	
		}

module.exports = mongoose.model('newproducts',schema);
