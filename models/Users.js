const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 1024
    },
    phone: {
        type: Number,
        default: null
    },
    cart: {
        type: Array,
        default: null
    },
    orders: {
        type: Array,
        default: null
    }
});




const UserModels = mongoose.model("users", UserSchema);
module.exports = UserModels;