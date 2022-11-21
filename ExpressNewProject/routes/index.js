import express from "express";
import * as url from 'url';
import indexcontroller from "../controller/indexcontroller.js";
import mailapi from "./mailapi.js";

const indexRouter = express.Router();

//middleware function to implement application leavel security : vsitor panel


indexRouter.all("/login",(req,res,next)=>
{
    if(req.session.sunm!=undefined )
    {
        req.session.sunm=undefined;
        req.session.srole=undefined;
    }
    next();
})


indexRouter.get("/",(req,res)=>
{
     indexcontroller.fetchCategory({}).then((result)=>
    {
        res.render("home",{"result":result});   
    }).catch((err)=>
   {
       console.log(err);
     })
});

indexRouter.get("/about",(req,res)=>
{

  //  res.send("<h1>/about url invoked, visitor routes</h1>");
  res.render("about");
});

indexRouter.get("/contact",(req,res)=>
{
    //res.send("<h1>/contact url invoked, visitor routes</h1>");
    res.render("contact");

});

indexRouter.get("/service",(req,res)=>
{
    //res.send("<h1>/service url invoked, visitor routes</h1>");
    res.render("service");
});

indexRouter.get("/register",(req,res)=>
{
    //res.send("<h1>/register url invoked, visitor routes</h1>");
    console.log("ui page open ,method GET");
    res.render("register",{"output":""});
});

indexRouter.post("/register",(req,res)=>
{
    indexcontroller.userRegister(req.body).then((result)=>
    {
        mailapi.sendMail(req.body);
        res.render("register",{"output":"User register successfully.."});

    }).catch((err)=>
    {
        res.render("register",{"output":err});


    });
});

indexRouter.get("/verifyuser",(req,res)=>
{
    //res.send("<h1>/login url invoked, visitor routes</h1>");
    var urlobj=url.parse(req.url,true).query
    indexcontroller.verifyuser(urlobj).then((result)=>{
        res.redirect("/login");
    }).catch((err)=>{
        console.log(err)
    })
});

indexRouter.get("/login",(req,res)=>
{
res.render("login",{"output":""});

});
indexRouter.post("/login",(req,res)=>
{
indexcontroller.userLogin(req.body).then((result)=>
{
    if(result.s==1 || result.s==2)
    {
        req.session.sunm=req.body.username
        var srole=result.s==1?"admin":"user";
        req.session.srole=srole;
    }
    result.s==0? res.render("login",{"output":"invalid user or verify your account..."}):
    (result.s==1?res.redirect("/admin"):res.redirect("/user"));
}).catch((err)=>
{
    res.render("login",{"output":"err"});    

})
});


export default indexRouter;