const mongoose = require('mongoose');
const validator = require("validator");

const productSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true,
        minlenght: 3
    },
    pimg:{
        type: String
    },
    pprice: {
        type: Number,
        required: true
    },
    pdesc: {
        type: String,

    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
},
{
    timestamps: true
})

const Product = new mongoose.model('Product',productSchema);

module.exports = Product;