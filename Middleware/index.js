const express = require("express");
const app = express();


// middleware --->
app.use((req,res,next)=>{
    // console.log("time" , new Date( Date.now()).toString());
    // console.log(req);
    req.time = new Date( Date.now()).toString();
    console.log(req.method, req.url,req.hostname, req.time, req.path)
    next();
});


// chack tokan... --->
let chackToken = (req,res,next)=>{
    let { token } = req.query;
    if(token === "giveaccess" ){
        next();
    }
      throw new Error("Access Denite !!!... ");
   
};
app.get("/api", chackToken, (req,res)=>{
    res.send("data");
});


app.get("/",(req,res)=>{
    res.send("This is home root");
})

app.listen(8080,()=>{
    console.log("server is run port 8080");
})