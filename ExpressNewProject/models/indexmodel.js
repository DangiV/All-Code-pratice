import "./connection.js";
import RegisterSchemaModel from "../schema/RegisterSchema.js";
import CategorySchemaModel from "../schema/categorySchema.js";

class IndexModel
{
    userRegisterModel(userDetails)
    {
        return new Promise ((resolve,reject)=>{

        
        //a document instance
        var obj = new RegisterSchemaModel(userDetails);

        // save model to database
        obj.save((err,result)=>
        {
            err ? reject(err) : resolve(result);
        });
    });
    
    }
    fetchUser(condition_obj)
    {
        return new Promise ((resolve,reject)=>
        {
            RegisterSchemaModel.find(condition_obj,(err,result)=>
            {
                err ? reject (err):resolve (result);
            })
        })
    }
    verifyusermodel(urlobj)
    {
        return new Promise((resolve,reject)=>{
            RegisterSchemaModel.updateOne(urlobj,{$set:{"status":1}},(err,result)=>{
                err?reject(err):resolve(result);
        })
    })
    }
    fetchCategorymodel(urlobj)
    {
        return new Promise((resolve,reject)=>{
            CategorySchemaModel.updateOne(urlobj,{$set:{"status":1}},(err,result)=>{
                err?reject(err):resolve(result);
            })
        })
    }
}

export default new IndexModel();