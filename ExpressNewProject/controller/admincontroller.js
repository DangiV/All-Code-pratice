import indexmodel from "../models/indexmodel.js";
import adminmodel from "../models/adminmodel.js";
import * as path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL('.',import.meta.url));

class adminController
{
    fetchUser()
     {
       return new Promise((resolve,reject)=>
       {
         var condiction_obj={'role':'user'}
         indexmodel.fetchUser(condiction_obj).then((result)=>
         {
             resolve(result);
         }).catch((err)=>{
           reject(err);
         })
       })
    }
    manageUserStatus(sDetails)
   {
      return new Promise((resolve,reject)=>
      {
       adminmodel.manageUserStatusModel(sDetails).then((result)=>
     {
        resolve(result);
     }).catch((err)=>
     {
       reject(err);
     })
    })
  }

  addCategory(catnm,fileobj)
   {
    // userRegister(userDetails)
    // {
     return new Promise((resolve,reject)=>
     {
 
         adminmodel.fetchCategory().then((result)=>
         {
          var l = result.length;
          var _id = l==0 ? 1 : result [l-1]. _id+1;
          var caticonnm=Date.now()+"-"+fileobj.name
          var cDetails = {"_id":_id,"catnm":catnm,"caticonnm":caticonnm}
       
          adminmodel.addCategoryModel(cDetails).then((result)=>
     {
      var upload_path = path.join(__dirname,"../public/uploads/categoryicon",caticonnm);
      fileobj.mv(upload_path)
        resolve(result);
     }).catch((err)=>
     {
       reject(err);
     })
                 }).catch((err)=>
          {
            reject(err);
          })
        })
     
  }
}
export default new adminController();