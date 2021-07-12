var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shop-api",{ 
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=>{
    console.log("Connection Established Successfully")
})
.catch((error)=>{
    console.log("Connection Failed")
})