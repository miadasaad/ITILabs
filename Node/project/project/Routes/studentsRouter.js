const express=require("express");
const controller=require("./../Controllers/studentContoller");
const {checkStudent,checkAdmin}=require("./../Middlewares/authMW");

const router=express.Router();

router.route("/students")
        .get(checkAdmin,controller.getAllStudents)
        .post(checkAdmin, controller.addStudent)
        .patch(checkStudent,controller.updateStudent)



module.exports=router;