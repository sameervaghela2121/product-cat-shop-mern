const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
        minlength:3
    }
})

const Category = new mongoose.model('Category',categorySchema);

module.exports = Category;