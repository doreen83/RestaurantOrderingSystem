var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var orderModel = new Schema({
    sessionId: { type: String },
    status: { type: String },
    //customer: { type: Customer },
    createdTimestamp: { type: Date },
    submittedTimestamp: { type: Date },
    specialInstructions: { type: String },
    delivery: { type: Boolean },
    carryOut: { type: Boolean }
});

module.exports = mongoose.model('Order', orderModel);