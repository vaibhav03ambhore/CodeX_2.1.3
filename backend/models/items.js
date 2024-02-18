import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
   
    
    name: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image: {
        type:String,
        required:true
    },
    detail: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    bidded:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Boolean,
        default: false
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizer',
        required: true
    }
}, {timestamps:true});

const Item = mongoose.model('Item', itemSchema);

export default Item;