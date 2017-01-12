/**
 * Created by dinesh on 10/1/17.
 */
var express = require('express');
var router = express.Router();

var controller = require('./students.controller');

router.get('/', controller.getStudents);
router.post('/', controller.createStudents);
router.get('/:id', controller.getStudent);
router.delete('/:id', controller.deleteStudent);
router.put('/:id', controller.updateStudent);


module.exports = function (app) {
    app.use('/api/students', router);
};
