import nodemailer from 'nodemailer';

class mailapi
{
 sendMail(userDetails)
 {
 var v_url = "http://localhost:3000/verifyuser?email="+userDetails.email;
 console.log(v_url);
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Vikasdangi7771@gmail.com',
    pass: 'Vikas@123'
  }
});

var mailOptions = {
  from: 'Vikasdangi7771@gmail.com',
  to: userDetails,
  subject: 'verifaction mail stock manager',
  html:"<h1>Welcome to stock manager</h1><p>You have succesfully register to our site , your log in  credentials are attached below </p><h2>Username : "+userDetails.email+"</h2><h2>Password :+"+userDetails.password+"</h2><h3>Click on the link below verifyaccount</h3>"+v_url
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
}
export default new mailapi();