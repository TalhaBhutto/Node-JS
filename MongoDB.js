const exp=require('express');
const app=exp();
const mongo= require('mongoose');
const User=require('./Models/user');

mongo.connect('mongodb+srv://Talha:lYDxLcpsmAs2gC0Y@cluster0.gmnqm.mongodb.net/MyDemoWeb?retryWrites=true&w=majority'
    ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }    
    ).then(console.warn('connected'))

User.find({},function(err,user){
    err?console.warn(err):console.warn(user)
})
const data=new User({
    _id: new mongo.Types.ObjectId(),
    name:"Adeel",
    email:"adeelahsan123@gmail.com",
    address:"Nagan CHowrangi Karachi"
});

data.save().then((res)=>{
    console.warn(res)
})
.catch(err=>console.warn(err))

