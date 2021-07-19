const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//Register User Route Starts Here!
router.post("/user",async(req,res)=>{
    try {
        const user = User(req.body);
        user.password = await bcrypt.hash(user.password,10);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send("User Registeration Failed",error);
    }
})
//Register User Route Ends Here!

//User Login Route Starts Here!

router.post("/user/login",async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(user){
            const validatePassword = await bcrypt.compare(req.body.password,user.password);
            if(validatePassword){
                const token = await user.generateAuthToken();
                res.status(200).send({user,token})
            }else{
                res.status(400).send("Invalid Password!");
            }
        }
        else{
            res.status(400).send("User Doesn't Exists!");
        }
    } catch (error) {
        res.status(400).send("Error LoggingIn",error);
    }
})

//User Login Route Starts Here!

module.exports = router;