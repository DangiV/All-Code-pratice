import express from "express";
const app = express();

//application leavel middleware for all route

app.use((req,res,next)=>
{
    console.log("Application leavel middleware invoked");
    next();
});

app.get("/",(req,res)=>
{
    res.send("<h1>/ or / home url invoked</h1>");
});

app.get("/home",(req,res)=>
{
    res.send("<h1>home url invoked</h1>");
});

app.get("/about",(req,res)=>
{
    res.send("<h1>about url invoked</h1>");
});

app.listen(3000);
console.log("server invoked at http://localhost:3000");