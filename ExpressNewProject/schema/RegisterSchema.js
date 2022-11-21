//Require Mongoose
import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const RegisterSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: [true, "Name is required"],
        lowercase: true,
        trim: true,
    },
    username: {
        type: String,
        required: [true,"Username is required"],
        lowercase: true,
        trim: true,
        unique: true,
    },
   password: {
        type: String,
        required: [true,"Password is required"],
        trim: true,
        maxlength: 10,
        minlength: 5,
    },
    mobile: {
        type: String,
        required: [true,"mobile is required"],
        trim: true,
        maxlength: 10,
        minlength: 10,
    },
    address: {
        type: String,
        required: [true,"Address is required"],
        trim: true,
    },
    address: {
        type: String,
        required: [true,"City is required"],
        trim: true,
    },
    gender: {
        type: String,
        required: [true,"Gender is required"],
        trim: true,
    },
    role:String,
    status: Number,
    info: String      
});

//Apply the uniQueValidator plugin to RegisterSchema.
RegisterSchema.plugin(uniqueValidator);

// compile schema to model
const RegisterSchemaModel = mongoose.model('register', RegisterSchema, 'register');

export default RegisterSchemaModel