var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var menuItemModel = new Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    imageUrl: { type: String }
});

module.exports = mongoose.model('MenuItem', menuItemModel);

