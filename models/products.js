const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        default: null
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    main_fabric: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    }
});




const ProductModuls = mongoose.model("products", ProductSchema);
module.exports = ProductModuls;