import express from "express";
import * as url from 'url';
//import * as path from 'path';
//const= __dirname()
const app = express();

import indexRouter from './routes/index.js';
import adminRouter from './routes/admin.js';
import userRouter from './routes/user.js';


//configruation to load ejs
app.set('view engine','ejs');
app.set('views','./views');

//configrutation to load template page
app.use('/',indexRouter);
app.use('/admin',adminRouter);
app.use('/user',userRouter);


app.listen(3000);
console.log("server invoked at link http://localhost:3000");