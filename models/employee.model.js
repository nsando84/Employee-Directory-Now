const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        manager: {
            type: String,
            required: true,
        },
    }
);

const User = mongoose.model('Useruse', userSchema);

module.exports = User;