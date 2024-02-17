import mongoose from "mongoose";

const dbconnect=async()=>{
    try {
        const connect=await mongoose.connect('mongodb://localhost:27017/Auction');
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default dbconnect;