const express = require("express");
const router = new express.Router();
const Product = require("../models/products");

//Creating/Posting Product Route Starts Here!
router.post("/product",async(req,res)=>{
    try {
        const pro = new Product(req.body);
        // console.log(pro);
        const createPro = await pro.save();
        res.status(201).send(createPro);
        
    } catch (error) {
        console.log("error")
    }
})
//Creating/Posting Product Route Ends Here!

//Getting All Product Route Begins Here!
router.get("/product",async(req,res)=>{
    try {
        const productData = await Product
        .find()
        .populate('category');
        // console.log("Getting Product Data",productData);
        res.send(productData);
    } catch (error) {
        console.log("ERROR")
    }
})
//Getting All Product Route Ends Here!

//Update Existing Product By Id Route Begins Here!
router.patch("/product/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updatePro = await Product.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(updatePro);
    } catch (error) {
        console.log("Update Error")
        
    }
})
//Update Existing Product By Id Route Ends Here!

//Finding Product By Slug Starts Here!

router.get("/product/:id",async(req,res)=>{
    try {
        const id = req.params.pname;
        const productNameData = await Product.findOne({id:id})
        if(!productNameData){
            res.status(404).send();
        }
        else{
            res.send(productNameData);
        }

    } catch (error) {
        res.status(500).send(error)
        console.log("Error in getting by slug")
        
    }
})

//Finding Product By Slug Starts Here!
router.get("/mix",async(req,res)=>{
    try {
        const mixData = await Product
        .find()
        .populate('category');
        res.send(mixData);
    } catch (error) {
        console.log("Error in mix GETing DATA: ",error)
    }
})


module.exports = router;