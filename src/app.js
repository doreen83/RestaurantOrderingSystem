var express = require('express');
var PORT = process.env.PORT || 5000;
var app = express();

var orderingRouter = require('./orderingRoutes')();  
app.listen(PORT, function() {
        console.log('running on port: ' + port);
});
