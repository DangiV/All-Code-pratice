//Require Mongoose
import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const PaymentSchema = mongoose.Schema({
    _id: Number,
    Username: String,
    price: Number,
    info : String    
});

//Apply the uniQueValidator plugin to RegisterSchema.
PaymentSchema.plugin(uniqueValidator);

// compile schema to model
const PaymentSchemaModel = mongoose.model('payment', PaymentSchema, 'payment');

export default PaymentSchemaModel