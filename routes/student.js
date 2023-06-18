const express = require("express");
const router = express.Router();


// import controllers 
const {createStudent} = require("../controllers/createStudent");
const {getStudent, getStudentById} = require("../controllers/getStudent");
const {updateStudent} = require("../controllers/updateStudent");
const {deleteStudent} = require("../controllers/deleteStudent");


// Defining API routers with handlers
router.post("/createStudent",createStudent); //  creating new student 
router.get("/getStudent",getStudent);     //  getting all student data
router.get("/getStudent/:id",getStudentById);  //  getting data by id 
router.put("/updateStudent/:id",updateStudent);  //  updating data
router.delete("/deleteStudent/:id",deleteStudent); // deleting data 



module.exports = router;