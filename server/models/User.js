import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true,
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minLength:8
    },
},{timestamps:true})
module.exports=mongoose.model('User',userSchema)