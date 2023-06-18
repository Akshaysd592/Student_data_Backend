


//Database connection 

const { config } = require("dotenv");
const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) // for successfull connection
    .then(() => {
      console.log("Database connected succesfully");
    }) // for not able to make database connection 
    .catch((error) => {
    console.log(error.message);
      console.log("Not able to connect with Database");
      process.exit(1);
    });
};

module.exports = dbConnect;
