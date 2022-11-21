import express from 'express';

const app = express()

app.get('/' , (req,res)=>{
    res.send('/  or /home invoked');
})

app.get('/about' , (req,res)=>
{
    res.send('/about url invoked' );
})

app.get('/contact',(req,res)=>
{
    res.send('/contact url invoked');
});

app.listen(3000)
console.log("url invoked at http://localhost:3000");
