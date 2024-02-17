import express from 'express';
const app=express();
const PORT=8000;
import dbconnect from "./confiq/db.js";
import errorhandler from "./middlewares/errorhandler.js";
import bidderrouter from "./routes/bidder_routes.js";


//DatabaseConnection
dbconnect();

//middlewares
app.use(express.json());
app.use(errorhandler);
app.use('/api/bidder',bidderrouter);


app.listen(PORT,()=>{
    console.log(`Server started `);
})