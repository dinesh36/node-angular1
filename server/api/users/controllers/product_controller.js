var product = require('../models/product_model.js');
var db = require('mongodb');

var insertnewproduct = function (req, res) {
    var salesmate_product = new product();

    salesmate_product.pid = req.body.pid;
    salesmate_product.pname = req.body.pname;
    salesmate_product.ptype = req.body.ptype;
    salesmate_product.prate = req.body.prate;


    salesmate_product.save(function (err) {
        if (err)
            res.send(err);

        res.json({message: 'New Product Added'});
    });
}


var allproduct = function (req, res) {
    product.find(function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
}


var prouctbyid = function (req, res) {
    var id = req.params.id;
    console.log('type ', typeof req.params.id);

    product.findOne({pid: id}, function (err, data) {
        if (err) {
            res.send(err);

        }
        else {
            res.json(data);
        }
    });
}


var updateproduct = function (req, res) {
    var pid = req.body.id;

    var newid = req.body.pid;
    var newname = req.body.pname;
    var newtype = req.body.ptype;
    var newrate = req.body.prate;

    product.findById(pid, function (err, s1) {
        s1.pid = newid;
        s1.pname = newname;
        s1.ptype = newtype;
        s1.ptype = newrate;


        s1.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'Product updated!'});
        });

    });
}


var removeproduct = function (req, res) {
    var pid = req.params.id.toString();

    console.log('===============> Here <===========  ' + pid);
    var mongoose = require('mongoose');
    // var id = mongoose.Types.ObjectId.fromString(id);
    // console.log('===============> Here <===========  ' + id);
    // var id = mongoose.Types.ObjectId.fromHexString(pid);
    product.remove({_id: pid}, function (err, product) {
        console.log("====><=======");
        console.log(product);
        if (err) {
            res.send(err);
        } else {
            res.json({message: 'Your Product is deleted'});
        }
    });
}

module.exports = {
    insertnewproduct: insertnewproduct,
    allproduct: allproduct,
    prouctbyid: prouctbyid,
    updateproduct: updateproduct,
    removeproduct: removeproduct
};





