const express = require("express");
const router = new express.Router();
const Category = require("../models/category");

router.get("/category",async(req,res)=>{
    try {
        const categoryData = await Category.find();
        res.send(categoryData);
    } catch (error) {
        res.send(error);
    }
})

router.post("/category",async(req,res)=>{
    try {
        const cat = new Category(req.body);
        const createCat = await cat.save();
        res.status(201).send(createCat);
    } catch (error) {
        
    }
})

module.exports = router;