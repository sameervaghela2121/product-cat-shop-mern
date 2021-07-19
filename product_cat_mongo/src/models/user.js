const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        requried:true,
        minlength:3
    },
    email: {
        type:String,
        required:true,
        unique:[true,"Email id allready present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type:Number,
        min:10,
        required:true,
    },
    address: {
        type:String,
        required:true,

    },
    password: {
        type:String,
        required:true,
    }
},{
    timestamps : true,
})


//Generating User Token Starts Here!

userSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({id:this._id.toString()},"thisissameervaghelasecretkeyfortokengeneration");
        // console.log("This is token after generation:",token);
        await this.save();
        return token;
    } catch (error) {
        console.log("Error Generating Token: ",error);
    }
}

//Generating User Token Ends Here!

const User = new mongoose.model('User',userSchema);

module.exports = User;