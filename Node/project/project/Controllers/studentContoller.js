const mongoose=require("mongoose");
require("./../Models/studentModel");
const StudentSchema=mongoose.model("students");
const DepartmentSchema=mongoose.model("departments");



exports.getAllStudents=function(request,response,next){

    StudentSchema.find({})
    .populate({path:"department",select:{name:1}})
    .then(data=>{
        response.status(200).json({data});
    })
    .catch(error=>next(error))

}


exports.addStudent=function(request,response,next){

    DepartmentSchema.findOne({_id:request.body.department})
    .then(department=>{
            if(department==null)
            throw new Error("Department not exists");

            let object=new StudentSchema({
                _id:request.body.id,
                email:request.body.email,
                password:request.body.password,
                department:request.body.department
            })
        return  object.save();
    })
    .then(data=>{
                response.status(201).json(data);
    })
    .catch(error=>next(error))
    
    
    


    
}


exports.updateStudent=(request,response,next)=>{

    if(request.body.id!=request.decodedToken.id)
    {

    }
    StudentSchema.updateOne({_id:request.body.id})


}