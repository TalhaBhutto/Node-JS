const mongoose=require('mongoose')
let Uschema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    address:String 
});
module.exports=mongoose.model('users',Uschema);