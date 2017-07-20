var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var orderModel = new Schema({
    id: { type: Number },
    sessionId: { type: String },
    status: { type: String },
    //customer: { type: Customer },
    createdTimestamp: { type: Date },
    submittedTimestamp: { type: Date },
    specialInstructions: { type: String }
});

module.exports = mongoose.model('Order', orderModel);