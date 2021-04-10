const mongo=require('mongoose')
let schema=new mongo.Schema({
    _id:mongo.Schema.Types.ObjectId(),
    name:String,
    email:String,
    address:String 
});
module.exports=mongo.model('user',schema);