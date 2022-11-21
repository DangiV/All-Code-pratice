import express from "express";
import * as url from "url";
import admincontroller from "../controller/admincontroller.js";

const adminRouter =express.Router();

// middleware function to implement application leavel security : admin panel

// adminRouter.use((req,res,next)=>
// {
//     if(req.session.sunm==undefined ||req.session.srole!="admin")
//     res.redirect("/login");
//     next();
// })


adminRouter.get("/",(req,res)=>
{
    res.render("adminhome",{"sunm":req.session.sunm});
});

adminRouter.get("/manageuser",(req,res)=>
{
    admincontroller.fetchUser().then((result)=>
    {
        res.render("manageuser",{"userDetails":result,"sunm":req.session.sunm});

    }).catch((err)=>
    {
        console.log(err);
    })
});

adminRouter.get("/manageUserStatus",(req,res)=>
{
    var sDetails =  url.parse(req.url,true).query;
    admincontroller.manageUserStatus(sDetails).then(()=>
    {
        res.redirect("/admin/manageuser")
    }).catch((err)=>
    {
        console.log(err);
    });
})

adminRouter.get("/addcategory",(req,res)=>
{
    res.render("addcategory",{"sunm":req.session.sunm,"output":""});
});

adminRouter.post("/addcategory",(req,res)=>
{
    admincontroller.addCategory(req.body.catnm,req.files.caticon).then((result)=>
    {
        res.render("addcategory",{"sunm":req.session.sunm,"output":"Category added successfully"});

    }).catch((err)=>
    {
    console.log(err);
    });
});


export default adminRouter;