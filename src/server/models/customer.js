var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var customerModel = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    zipCode: { type: String },
    city: { type: String }
    // payment info
});

module.export("Customer", customerModel);