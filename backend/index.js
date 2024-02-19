import express from 'express';
import errorhandler from "./middlewares/errorhandler.js";
import bidderrouter from "./routes/bidder_routes.js";
import itemRoutes from "./routes/ItemRoutes.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
const port=process.env.PORT || 3000;
const DATABASE_URL=process.env.MONGODB_URI;

// database connection
const app=express();
connectDB(DATABASE_URL);


// middlewares
app.use(express.json());
app.use(errorhandler);
app.use(cookieParser());

// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend origin
    credentials: true
  }));
app.use(express.urlencoded({extended:true}));

// routes middlewares
app.use('/api/bidder',bidderrouter);
app.use('/api/organizer',userRoutes);
app.use('/api/bid-items',itemRoutes);

app.get('/',(req,res)=>{
    res.send("welcome to CodeX");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

