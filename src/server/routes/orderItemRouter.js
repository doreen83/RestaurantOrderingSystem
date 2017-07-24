const express = require('express');

var getOrderItemRouter = function(orderItem){ // also pass cart or session id?
    const orderItemRouter = express.Router();
    orderItemRouter.route('/')
    //    .post(function(req,res) {
    //
    //    })
        .get(function(req,res){
            res.json({ order: 'doreen'});
        });
        return orderItemRouter;
}

module.exports = getOrderItemRouter;