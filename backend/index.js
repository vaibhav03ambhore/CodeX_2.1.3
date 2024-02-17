const express=require('express');
const app=express();
const PORT=8000;
const dbconnect=require("./confiq/databaseconnect");
const errorhandler=require("./middlewares/errorhandler");
const bidderrouter=require("./routes/bidder_routes");


//DatabaseConnection
dbconnect();

//middlewares
app.use(express.json());
app.use(errorhandler);
app.use('/api/bidder',bidderrouter);


app.listen(PORT,()=>{
    console.log(`Server started `);
})