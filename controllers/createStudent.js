
// controller to create new student entry


// importing schema 
const Student = require("../models/studentSchema");

exports.createStudent = async (req,res)=>{ 
    try{
           const {userName,email,rollNo} = req.body;


         const datasaved = await  Student.create({
            userName,email,rollNo,
         });

         res.status(201).json({
            success:true,
            data : datasaved,
            message:"student data stored successfully",
         });

    }
    catch(error){
        console.log(error);

        res.status(500).json({
            success:false,
            message:"Can not post student data",
        })
    }
}