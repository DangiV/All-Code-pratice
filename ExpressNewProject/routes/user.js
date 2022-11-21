import express from 'express';
import * as url from "url";
import usercontroller from '../controller/usercontroller.js';
const userRouter = express.Router();

//middleware function to implement application leavel security : user panel


/*userRouter.use((req,res,next)=>
{
    if(req.session.sunm==undefined || req.session.srole!="user")
    res.redirect("/login");
    next();
})*/


userRouter.get("/",(req,res)=>
{
    res.render("userhome",{"sunm":req.session.sunm});
});

userRouter.get("/funds",(req,res)=>
{
   var  paypalURL="https://www.sandbox.paypal.com/cgi-bin/webscr"
   var paypalID = "sb-izcha15245574@business.example.com"
    //sb-q47cg17577994@personal.example.com
    res.render("funds",{"sunm":req.session.sunm,"paypalURL":paypalURL,"paypalID":paypalID})
});

userRouter.get("/payment",(req,res)=>{
    var urlDetails = url.parse(req.url,true).query
    usercontroller.payment(urlDetails).then((result)=>
    {
        req.session.sunm=urlDetails.sunm;
        req.session.srole="user";
        res.redirect("/user/success")
    }).catch((err)=>
    {
        console.log(err);
    })
   });

   userRouter.get("/success",(req,res)=>
   {
       res.render("success",{"sunm":req.session.sunm});
   });

   userRouter.get("/cancel",(req,res)=>
{
    res.render("cancel",{"sunm":req.session.sunm});
});

   
export default userRouter;