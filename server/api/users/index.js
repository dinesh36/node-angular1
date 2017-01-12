// salesmate users index.js


var sales_mate_express    = require('express');
var sales_mate_controller = require('./controllers/product_controller.js');


var sales_mate_router = sales_mate_express.Router();

sales_mate_router.get('/products',sales_mate_controller.allproduct);

sales_mate_router.get('/products/:id',sales_mate_controller.prouctbyid);

sales_mate_router.put('/products/:id',sales_mate_controller.updateproduct);

sales_mate_router.delete('/products/:id',sales_mate_controller.removeproduct);

sales_mate_router.post('/products',sales_mate_controller.insertnewproduct);


module.exports = sales_mate_router;
