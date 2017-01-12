/**
 * Created by dinesh on 10/1/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    FirstName:{type: String},
    LastName:{type:String},
    Project:{type:String},
    Collage:{type:String},
    Percentage:{type:Number}
},{
    collection:'students'
});

mongoose.model('Students', StudentSchema);
// var City = mongoose.models.City;
// global.MongoORM.City = City;