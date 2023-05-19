const mongoose=require("mongoose");
require("./../Models/departmentModel");

const DepartmentSchema=mongoose.model("departments");

exports.getAllDepartments=function(request,response,next){


    DepartmentSchema.find({})
                    .then(data=>{
                        response.status(200).json({data});

                    })
                    .catch(error=>{
                        next(error);
                    })
   
}
exports.getDepartment=function(request,response,next){

    DepartmentSchema.findOne({_id:request.params.id})
                    .then(department=>{
                      if(department==null)
                      {
                        throw new Error("department not exists...");
                      }
                      response.status(200).json(department);

                    }).catch(error=>next(error))
   
}

exports.addDepartment=(request,respsone,next)=>{

    let object=new DepartmentSchema({
      _id:request.body.id,
      name:request.body.name,
      location:request.body.location
    });

    object.save()
    .then(data=>{
      respsone.status(201).json({data})

    })
    .catch(error=>next(error))


  }

exports.updateDepartment=(request,respsone,next)=>{
  
    DepartmentSchema.updateOne({
      _id:request.body.id
    },{
      $set:{
        name:request.body.name,
        location:request.body.location
      }
    })
    .then(data=>{
        respsone.status(200).json({data:"updated"});

    })
    .catch(error=>next(error))

  }

exports.deleteDepartment=(request,respsone)=>{

    respsone.status(200).json({message:"delete departments "+request.params.id})
}