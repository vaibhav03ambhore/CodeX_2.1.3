import mongoose from "mongoose";

const organizerSchema= mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"organizer"
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    organization: {
    name:{type: String, required:true, unique:true},
    address: String,
    creationDate: Date
  }
    
},{timestamps:true});

const Organizer=mongoose.model('Organizer',organizerSchema);
export default Organizer;