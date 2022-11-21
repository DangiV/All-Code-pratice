 import indexmodel from "../models/indexmodel.js";
 
 class IndexController
 {
    userRegister(userDetails)
    {
     return new Promise((resolve,reject)=>
     {
 
         indexmodel.fetchUser({}).then((result)=>
         {
          var l = result.length;
          var _id = l==0 ? 1 : result [l-1]. _id+1;
          userDetails = {...userDetails,_id:_id,role:"user",status:1  ,info:Date()}
        
        indexmodel.userRegisterModel(userDetails).then((result)=>
        {
            resolve(result)
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
    userLogin(userDetails)
  {
    return new Promise((resolve,reject)=>
    {
      userDetails={...userDetails,'status':1}
      indexmodel.fetchUser(userDetails).then((result)=>
      {
        var s = result.length==0 ? 0 :(result[0].role=="admin"?1:2);
          resolve({"s":s});
      }).catch((err)=>{
        reject(err);
      })
    })
    
  }
  verifyuser(ulrobj)
    {
      return new Promise((resolve,reject)=>{
        indexmodel.verifyusermodel(ulrobj).then((result)=>{
          resolve(result)
        }).catch((err)=>{
              reject(err);
        })
      })
    }
    fetchCategory(condition_obj)
  {
    return new Promise((resolve,reject)=>
    {
indexmodel.fetchCategorymodel(condition_obj).then((result)=>
{
  resolve(result);
}).catch((err)=>{
  reject(err); 
   })
    })
  }
 }

 export default new IndexController();