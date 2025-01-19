
const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


const error = (req,res,next)=>{
    throw new ExpressError(401, "Access Dinitaed");
}
app.get("/error", error, (req,res)=>{
    Hardik = chavda;
    
});

app.get("/",(req,res)=>{
    xyz = pqr ;
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403, "Access to Admin is Forbidden ")
})
app.use((err,req,res,next)=>{
    let {status = 500 , message = "Some Error"} = err;
    res.status(status).send(message);
})



app.listen(8080,()=>{
    console.log("app is run port 8080");
})