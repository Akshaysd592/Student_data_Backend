// controller to update data


// import student schema
const Student = require("../models/studentSchema");

// updating student data 
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, rollNo } = req.body;

    const updateddata = await Student.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        userName,
        email,
        rollNo,
      }
    );
  
    res.status(200).json({
        success:true,
        message:"Data updated successfully",
    })



  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
      message: "Data can not be deleted",
    });
  }
};
