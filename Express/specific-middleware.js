//application leavel middleware

import express from "express";
const app = express();

//application leavel middleware for specific route


app.get("/",(req,res,next)=>
{
  res.send("<h1>/ or / home url invoked</h1>")
});

app.get("/home",(req,res,next)=>
{
  res.send("<h1>/ or / home url invoked</h1>")
});

app.get("/about",(req,res,next)=>
{
  res.send("<h1>/ or / about url invoked</h1>")
});

app.get("/contact",(req,res,next)=>
{
  res.send("<h1>/ or / contact url invoked</h1>")
});

app.listen(3000);
console.log("server invoked at http://localhost:3000");
