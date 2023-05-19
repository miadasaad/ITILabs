const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

require("./../Models/studentModel");
const StudentSchema=mongoose.model("students");




exports.login=function(request,response,next){

    //static admin email :x@x.com  , password :123
    if(request.body.email=="x@x.com"&&request.body.password=="123")
    {

        const token=jwt.sign({
            id:1,
            role:"admin",
            userName:"x"
        },"ITIPDAlexTrack",{expiresIn:"1h"});        

        response.status(200).json({data:"OK",token})
    }
    else
    {
        StudentSchema.findOne({email:request.body.email,
                            password:request.body.password})
                    .then(user=>{
                        if(user==null)
                        {
                            throw new Error("Username or password incorrect..")
                        }

                        const token=jwt.sign({
                            id:user._id,
                            role:"student"
                        },"ITIPDAlexTrack",{expiresIn:"1h"});        
                
                        response.status(200).json({data:"OK",token})

                    })
                    .catch(error=>next(error))



    }
  
}





