const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/register",(req,res)=>{
    let {user, pass} = req.query;
    res.send(`submit your data :- Your name : ${user} & Password : ${pass}`)
})
app.post("/register",(req,res)=>{
    let {user, pass} = req.body;
   
    res.send(`submit your data :- Your name : ${user} `)
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
