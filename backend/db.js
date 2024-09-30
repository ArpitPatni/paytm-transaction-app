const mongoose=require('mongoose');

mongoose.connect(
  "mongodb+srv://arpitpatni1800:XuvAr12345@cluster0.tujsw.mongodb.net/paytm"
);
//create a user schema
const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})

//create a model from the schema
 const User=mongoose.model('User',userSchema);

 module.exports={
    User
 }