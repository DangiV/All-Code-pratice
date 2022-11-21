import "./connection.js";
import PaymentSchemaModel from "../schema/PaymentSchema.js";

class UserModel
{
    userPaymentModel(userDetails)
    {
        return new Promise ((resolve,reject)=>{

        
        //a document instance
        var obj = new PaymentSchemaModel(userDetails);

        // save model to database
        obj.save((err,result)=>
        {
            err ? reject(err) : resolve(result);
        });
    });
    
    }
    fetchPaymen(condition_obj)
    {
        return new Promise((resolve,reject)=>
        {
            PaymentSchemaModel.find(condition_obj,(err,result)=>
            {
                err ? reject (err):resolve (result);
            })
        });
    }
    /*verifyusermodel(urlobj)
    {
        return new Promise((resolve,reject)=>{
            RegisterSchemaModel.updateOne(urlobj,{$set:{"status":1}},(err,result)=>{
                err?reject(err):resolve(result);
        })
    })
    }*/
}

export default new UserModel();