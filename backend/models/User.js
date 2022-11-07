const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    //create our attribute
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,

    },
    email:{
        type:String,
        require:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6
    },
//timestamps=true;  just to get user create or update time
},{timestamps:true})
module.exports =mongoose.model("User",UserSchema)