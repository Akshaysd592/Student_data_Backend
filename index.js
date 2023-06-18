const express= require("express");
const app = express();


require("dotenv").config();

// Port 
const Port = process.env.PORT || 4000 ;


// middleware
app.use(express.json());



// importing routes 
const studentroutes = require("./routes/student");

// api creation for routes obtained 
app.use("/api/v1",studentroutes);



// server creation 
app.listen(Port,()=>{
    console.log(`Server started at port ${Port}`);
})


// database connection 
const dbConnect = require("./config/database");
dbConnect();


//default route for testing 
app.get("/",(req,res)=>{
    res.send(`<h1>This is home page</h1>`);
})