const express = require('express');

var getMenuCategoryRouter = function(MenuCategory) {
    const menuCategoryRouter = express.Router();
    menuCategoryRouter.route('/')
        .get(function(req,res) {
            MenuCategory.find(function(err,menuCategories) {
                if (err)
                    res.status(500).send(err);
                else 
                    res.json(menuCategories);
            });
        })
        .post(function(req, res){
            var menuCategory = new MenuCategory(req.body);
            menuCategory.save();
            res.status(201).send(menuCategory);
        })
    return menuCategoryRouter;
}

module.exports = getMenuCategoryRouter;