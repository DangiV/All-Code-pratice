import express from "express";
import * as url from 'url';
import * as path from 'path';
import  bodyParser from 'body-parser';
import session from "express-session";
import fileUpload from "express-fileupload";

const __dirname = url.fileURLToPath(new URL('.',import.meta.url));
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"my school name is sgps"}));
app.use(fileUpload());

import indexRouter from './routes/index.js';
import adminRouter from './routes/admin.js';
import userRouter from './routes/user.js';

//configruation to load static file
app.use(express.static(path.join(__dirname,"public")));


//configruation to load template
app.set('view engine','ejs');
app.set('views','./views');

//configrutation to load template page
app.use('/admin',adminRouter);
app.use('/user',userRouter);
app.use('/',indexRouter);


app.listen(3010);
console.log("server invoked at link http://localhost:3010");