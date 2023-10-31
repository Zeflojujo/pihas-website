const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    },
    verificationToken:String,
    addresses:{
         
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },

});

const User = mongoose.model("User",userSchema);

module.export = User;