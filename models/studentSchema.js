const mongoose = require("mongoose");

// student schema
const studentSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        maxlength : 50,
    },
    email:{
        type:String,
        required:true,
    },
    rollNo:{
        type:Number,
        required:true,
    }
});


module.exports = mongoose.model("Student",studentSchema);