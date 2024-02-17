const mongoose=require('mongoose');

const bidderSchema=mongoose.Schema({
    "username":{
        type:String,
        required: [true, "Please add the user name"],
    },
    "email":{
        type:String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email address already taken"],
    },
    "password":{
        type:String,
        required: [true, "Please add the user password"],
    },
    "mobilenum":{
        type:String,
        required: [true, "Please add the user Mobileno"],
    }
},{timestamps: true,});



module.exports=mongoose.model("Bidder", bidderSchema);