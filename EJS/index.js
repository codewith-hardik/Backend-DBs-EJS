const { constants } = require("buffer");
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.listen(8080,(req,res)=>{
    console.log(`listening port ${port}`)
});
app.get("/hello",(req,res)=>{
    res.send("Hello Code with hardik...");
})
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6 + 1);
    res.render("rolldice",{ diceVal });
})


app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const followers = ["prince","jay","kashyap","meet","yesh","dharmik","kavya","vivek"];
    res.render("instagram",{ username, followers})
})

app.get("/ig/acc/:username",(req,res)=>{
    let {username } = req.params;
    let instaData = require("./data.json");
    res.render("instaAcc",{data:instaData[username]})
})







