const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    PhoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Email: { type: String },
    Address: { type: String },
    isActive: {
        type: Boolean,
        required: true,
        default: false,
    },
    Level: {
        type: String,
        required: true,
        default: 'bidder',
    },
    Password: {
        type: String,
        required: true,
        default: 'brogemway',
    },
    DoB: { type: Date },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
