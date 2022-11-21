import "./connection.js";
import RegisterSchemaModel from "../schema/RegisterSchema.js";
import CategorySchemaModel from "../schema/categorySchema.js"


class AdminModel
{
    manageUserStatusModel(sDetails)
    {
        return new Promise((resolve,reject)=>
        {
            var condition_obj={"_id":sDetails.regid}
            if(sDetails.s=="block")
            {
                RegisterSchemaModel.updateOne(condition_obj,{$set:{"status":0}},(err,result)=>
            {
                 err ? reject(err) : resolve (result);
             })
            }
            else if(sDetails.s=="verify")
            {
                RegisterSchemaModel.updateOne(condition_obj,{$set:{"status":1}},(err,result)=>
                {
                     err ? reject(err) : resolve (result);
                 })
            
            }
            else
            {
                RegisterSchemaModel.remove(condition_obj,(err,result)=>
                {
                     err ? reject(err) : resolve (result);
                 })
             
            }

        })
    }
    addCategoryModel(cDetails)
    {
        return new Promise ((resolve,reject)=>{

        
        //a document instance
        var obj = new CategorySchemaModel(cDetails);

        // save model to database
        obj.save((err,result)=>
        {
            err ? reject(err) : resolve(result);
        });
    });
    
    }
    fetchCategory(condition_obj)
    {
        return new Promise ((resolve,reject)=>
        {
            CategorySchemaModel.find(condition_obj,(err,result)=>
            {
                err ? reject (err):resolve (result);
            })
        })
    }
}

export default new AdminModel();