const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    PhoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Email: String,
    Address: String,
    IsActive: {
        type: Boolean,
        required: true,
        default: false,
    },
    Level: {
        type: String,
        enum: ['bidder', 'admin'],
        required: true,
        default: 'bidder',
    },
    Password: {
        type: String,
        required: true,
        default: 'brogemway',
    },
    DoB: Date,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
