const express=require("express");
const mongoose=require("mongoose");
const departmentRouter=require("./Routes/departmentsRouter");
const studentRouter=require("./Routes/studentsRouter");
const loginRouter=require("./Routes/authenticationRooute");
const authMW=require("./Middlewares/authMW");
// /1-  open V8 engie as a http server 




const server=express() ; //call defualt function express


mongoose.connect("mongodb://127.0.0.1:27017/ITIDB")
        .then(()=>{
            console.log("DB connected...");
            server.listen(process.env.PORT||8080,()=>{
                console.log("server is listenining ,.....")
            });
        })
        .catch(error=>{
            
            console.log("DB problem "+error);
        })


//First Middleware   --> logging
server.use((request,response,next)=>{
    console.log(request.url,request.method);
    next();
});

//--------------------------routes (End points )
server.use(express.json());
// server.use(express.urlencoded());

server.use(loginRouter);

server.use(authMW);
server.use(departmentRouter);
server.use(studentRouter);

//-- Not found middleaware
server.use((request,respsone)=>{
    respsone.status(404).json({message:"Page not Found"})    
});

//- Error Middleware   catch
server.use((error,request,response,next)=>{   

    response.status(500).json({message:" exception : "+error});
});


