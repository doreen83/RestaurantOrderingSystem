const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    PORT = process.env.PORT || 5000;

// Models
const menuItem = require('./server/models/menuItem');
const orderItem = require('./server/models/orderItem');
const menuCategory = require('./server/models/menuCategory');
const orderItemRouter = require('./server/routes/orderItemRouter')(orderItem);
const menuItemRouter = require('./server/routes/menuItemRouter')(menuItem);
const menuCategoryRouter = require('./server/routes/menuCategoryRouter')(menuCategory);
var cors = require('cors');

// DB connection
var db = mongoose.connect('mongodb://localhost/orderingAPI');

// Express app
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/ordering', orderItemRouter);
app.use('/menuItem', menuItemRouter);
app.use('/menuCategory', menuCategoryRouter);
app.listen(PORT, "0.0.0.0", function () {
    console.log('running on port: ' + PORT);
});
