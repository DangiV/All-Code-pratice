//express mongodb connentivity file for schema implementation 

import mongoose from "mongoose";
const url = "mongodb://localhost:27017/demo";
mongoose.connect(url);
console.log("successfully connected to mongodb database.....");