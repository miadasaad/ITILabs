const mongoose=require("mongoose");


//1- generate schema for department
const schema=new mongoose.Schema({
    _id:Number,
    name:{type:String, unique:true},
    location:String
});

//2- mapping 
//setter
mongoose.model("departments",schema);
