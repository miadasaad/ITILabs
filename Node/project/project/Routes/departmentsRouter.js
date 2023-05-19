const express=require("express");
const controller=require("./../Controllers/departmentController");
const {checkAdmin}=require("./../Middlewares/authMW");
const router=express.Router();

router.route("/departments")
      .all(checkAdmin)
      .get(controller.getAllDepartments)
      .post(controller.addDepartment)
      .patch(controller.updateDepartment)
    //  .delete(controller.deleteDepartment);
 
router.route("/departments/:id")
      .all(checkAdmin)
      .get(controller.getDepartment)
      .delete(controller.deleteDepartment)
      
module.exports=router;