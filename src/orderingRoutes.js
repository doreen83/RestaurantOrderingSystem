var express = require('express');

var routes = function(orderItem) { // also pass cart or session id?
    var orderItemRouter = express.Router();
    orderItemRouter.route('/')
    .post(function(req,res) {

    })
    .get(function(req,res) {

    });
}