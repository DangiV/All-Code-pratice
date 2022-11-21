import express from "express";
const indexRouter = express.Router();

indexRouter.get("/",(req,res)=>
{
    //res.send("<h1>/ or / home url invoked , visitor routes</h1>");
    res.render("home");
});

indexRouter.get("/about",(req,res)=>
{
    res.send("<h1>/about url invoked, visitor routes</h1>");
});

indexRouter.get("/contact",(req,res)=>
{
    res.send("<h1>/contact url invoked, visitor routes</h1>");
});

indexRouter.get("/service",(req,res)=>
{
    res.send("<h1>/service url invoked, visitor routes</h1>");
});

indexRouter.get("/register",(req,res)=>
{
    res.send("<h1>/register url invoked, visitor routes</h1>");
});

indexRouter.get("/login",(req,res)=>
{
    res.send("<h1>/login url invoked, visitor routes</h1>");
});

export default indexRouter;