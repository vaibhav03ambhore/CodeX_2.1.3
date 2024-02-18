import express from 'express';

const app=express();
import errorhandler from "./middlewares/errorhandler.js";
import bidderrouter from "./routes/bidder_routes.js";


import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import cors from 'cors';


dotenv.config();
const port=process.env.PORT || 3000;
const DATABASE_URL=process.env.MONGODB_URI;

connectDB(DATABASE_URL);

app.use(express.json());
app.use(errorhandler);
app.use('/api/bidder',bidderrouter);

app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('/api/bidder',bidderrouter);
app.use('/api/organizer',userRoutes);
app.get('/',(req,res)=>{
    res.send("welcome to CodeX");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

