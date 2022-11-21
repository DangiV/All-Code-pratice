import express from 'express';
const userRouter = express.Router();

userRouter.get("/",(req,res)=>
{
    res.send("<h1>/user home url invoked </h1>");
});

userRouter.get("/cpuser",(req,res)=>
{
    res.send("<h1>/cpuser url invoked </h1>");
});

userRouter.get("/epsur",(req,res)=>
{
    res.send("<h1>/epsur url invoked </h1>");
});

userRouter.get("/addproduct",(req,res)=>
{
    res.send("<h1>/adproduct url invoked </h1>");
});

export default userRouter;