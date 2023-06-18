
// controllers for fetching data from database

// importing model
const Student = require("../models/studentSchema");

// to get all student data
exports.getStudent = async (req, res) => {
  try {
    const allStudent = await Student.find({});

    res.status(200).json({
      success: true,
      data: allStudent,
      message: "All student data is fetched successfully",
    });


  } 
  
  catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Can not get all data",
    });
  }
};


// to get specific student data by using id 
exports.getStudentById = async (req,res)=>{
    try{
        const id = req.params.id;
        const  dataobtainedbyid =  await Student.findById({_id:id});
        console.log(dataobtainedbyid);
    
        if(!dataobtainedbyid){
            return res.status(404).json({
                success:false,
                message:"Data not obtained for given id ",
            })
        };


        res.status(200).json({
            success:true,
            data:dataobtainedbyid,
            message:"Data obtained successfully for given id",
        });



    }
    catch(error){
        console.log(error);
    res.status(500).json({
      success: false,
      message:`can not get data for given ${id} id `,
    });
    }
}


