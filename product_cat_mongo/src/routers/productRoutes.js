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
        res.status(404).send();
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
        res.status(404).send({
            error: 'Its an error'
        })
    }
})
//Getting All Product Route Ends Here!

//Getting Product By Id Route Begins Here!

router.get("/product/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        // console.log(JSON.stringify(_id))
        console.log("Trying getting product by id: ",_id)
        const productData = await Product.findById({_id});
        if(!productData){
            console.log("Getting No Product")
            res.status(404).send()
        }
        else{
            console.log("Getting Product",productData)
            res.send(productData)
            // res.status(500).send(error)
        }
    } catch (error) {
        
    }
})

//example start
// router.get('/product/:id/edit')
// router.get('/product/:id/edit')
//example ends

//Getting Product By Id Route Ends Here!

//Update Existing Product By Id Route Begins Here!
router.patch("/product/:id/edit",async(req,res)=>{
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

// router.get("/product/:id",async(req,res)=>{
//     try {
//         const id = req.params.pname;
//         const productNameData = await Product.findOne({id:id})
//         if(!productNameData){
//             res.status(404).send(productNameData);
//         }
//         else{
//             res.send(productNameData);
//         }

//     } catch (error) {
//         res.status(500).send(error)
//         console.log("Error in getting by slug")
        
//     }
// })
//Finding Product By Slug Ends Here!


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

//Find By Id and Delete Route Starts Here!

router.delete("/product/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        if(!_id){
            return res.status(400).send();
        }
        else{
            const deleteProduct = await Product.findByIdAndDelete(_id);
            res.send(deleteProduct);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

//Find By Id and Delete Route Ends Here!


module.exports = router;