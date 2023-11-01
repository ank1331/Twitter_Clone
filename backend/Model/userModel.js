import express from "express"
import mongoose from "mongoose"




const userModel  = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        require:true,
        unique: true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    image:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
    },
    name:{
        type:String,
        
    }
}, {timestamps:true})

const User = mongoose.model("User", userModel)

export default User


