const jwt=require("jsonwebtoken");
module.exports=(request,respsone,next)=>{

    //search for the token
    try{
        const token= request.get("Authorization").split(" ")[1];
        
        const decodedToken= jwt.verify(token,"ITIPDAlexTrack");
        request.decodedToken=decodedToken;
        next();
    }catch(error)
    {
        
        next(new Error("not Athenticated"));

    }
  


}


module.exports.checkAdmin=(request,response,next)=>{
    if(request.decodedToken.role=="admin")
    next()
    else
    next(new Error("Not Authorized"))
}

module.exports.checkStudent=(request,response,next)=>{
    if(request.decodedToken.role=="student")
    next()
    else
    next(new Error("Not Authorized"))
}



