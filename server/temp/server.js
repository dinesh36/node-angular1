var express = require('express');
var app = express();
require('./apis/students')(app);

app.use(express.static('../client'));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});