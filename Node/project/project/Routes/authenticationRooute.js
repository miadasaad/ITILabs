const express=require("express");
const controller=require("./../Controllers/authenticationContoller");

const router=express.Router();

router.post("/login",controller.login)

module.exports=router;