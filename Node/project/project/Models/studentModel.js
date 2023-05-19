const mongoose=require("mongoose");


const schema=new mongoose.Schema({
    _id:Number,
    email:String,
    password:String,
    department:{type:Number,ref:"departments"} // ref:"collectionName"

});


mongoose.model("students",schema);