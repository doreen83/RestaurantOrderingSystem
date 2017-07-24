const express = require('express');


var getMenuItemRouter = function(MenuItem){
    const menuItemRouter = express.Router();
    menuItemRouter.route('/')
        .get(function(req, res) {
            MenuItem.find(function(err, menuItems){
                if (err)
                    res.status(500).send(err);
                else
                    res.json(menuItems);
            });
        })
        .post(function(req, res){
            var menuItem = new MenuItem(req.body);
            menuItem.save();
            res.status(201).send(menuItem);
        })
    return menuItemRouter;
}

module.exports = getMenuItemRouter;
