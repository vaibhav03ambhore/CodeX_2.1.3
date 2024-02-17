import mongoose from 'mongoose';

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
    },
    "role":{
        type:String,
        default:"bidder",
    },
    
},{timestamps: true,});


const biddermodel=mongoose.model("Bidder", bidderSchema);
export default biddermodel;