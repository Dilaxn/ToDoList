//jshint esversion:6

const express=require("express");
const bodyParser = require("body-parser");
const app=express();
let items=["work1","work2","work3"];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  let tdy= new Date();

 let options={
   weekday:"long",
   day:"numeric",
   month:"long"
 };
let day=tdy.toLocaleDateString("en-us",options);
//  res.send("Hii");
res.render("list",{TheDay:day,newItem:items});
});
app.post("/",function(req,res){
   item=req.body.it;
   items.push(item);
res.redirect("/");
});
app.listen(3000,function(){
  console.log("server 3000 started to run");
});
