var mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let user = module.exports = mongoose.model('user', userSchema);