const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    PORT = process.env.PORT || 5000;

// Models
const menuItem = require('./server/models/menuItem');
const orderItem = require('./server/models/orderItem');
const orderItemRouter = require('./server/routes/orderItemRouter')(orderItem);
const menuItemRouter = require('./server/routes/menuItemRouter')(menuItem);

// DB connection
var db = mongoose.connect('mongodb://localhost/orderingAPI');

// Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/ordering', orderItemRouter);
app.use('/menu', menuItemRouter);
//app.route('/').get(function(req,res,next) {
//    res.send('k17!');
//});
app.listen(PORT, function () {
    console.log('running on port: ' + PORT);
});
