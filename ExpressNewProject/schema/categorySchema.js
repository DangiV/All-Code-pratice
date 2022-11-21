//Require Mongoose
import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = mongoose.Schema({
    _id: Number,
    catnm: {
        type: String,
        required: [true, "catagory name is required"],
        lowercase: true,
        unique:true,
        trim: true,
    },
    caticonnm:{
        type: String,
        required: [true, "catagory icon is required"],
        trim: true,
    }      
});

//Apply the uniQueValidator plugin to RegisterSchema.
CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model('category', CategorySchema, 'category');

export default CategorySchemaModel