const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    notes: String,
    registrationDate: Date

});

mongoose.model('registration', registrationSchema);
