// controller for deletion

// importing model 
const Student = require("../models/studentSchema");

exports.deleteStudent = async (req, res) => {
  try {
    const {id} = req.params;
   await  Student.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Data deleted Successfully for given id ",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Data can not be deleted",
    });
  }
};
