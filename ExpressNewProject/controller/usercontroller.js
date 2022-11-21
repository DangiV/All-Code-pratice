import usermodel from "../models/usermodel.js";
 
class UserController
{
    payment(urlDetails)
   {
    return new Promise((resolve,reject)=>
    {

        usermodel.fetchPaymen().then((result)=>
        {
         var l = result.length;
         var _id = l==0 ? 1 : result [l-1]. _id+1;
         var paymentDetails = {_id:_id,userid:urlDetails.sunm,price:parseInt(urlDetails.price),info:Date()}
        usermodel.userPaymentModel(paymentDetails).then((result)=>
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

  /* userLogin(userDetails)
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
   }*/
}

export default new UserController();