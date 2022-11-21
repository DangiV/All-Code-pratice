import express from "express";
const adminRouter =express.Router();

adminRouter.get("/",(req,res)=>
{
    res.send("<h1>/admin home url invoked, admin routes </h1>");
});

adminRouter.get("/cpadmin",(req,res)=>
{
    res.send("<h1>/cpadmin  url invoked, admin routes </h1>");
});

adminRouter.get("/manageuser",(req,res)=>
{
    res.send("<h1>/manageuser url invoked, admin routes </h1>");
});

export default adminRouter;