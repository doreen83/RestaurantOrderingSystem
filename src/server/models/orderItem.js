var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var orderItemModel = new Schema({
    orderId: { type: Number },
    menuItemId: { type: Number },
    specialInstructions: { type: String },
    quantity: { type: Number }
});
                                
module.exports = mongoose.model('OrderItem', orderItemModel);