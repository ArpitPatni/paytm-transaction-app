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
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});



//create a model from the schema
 const User=mongoose.model('User',userSchema);
 const Account = mongoose.model("Account", accountSchema);

 module.exports={
    User,
    Account
 }