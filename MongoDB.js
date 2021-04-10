const exp=require('express');
const app=exp();
const mongo= require('mongoose');

mongo.connect('mongodb+srv://Talha:lYDxLcpsmAs2gC0Y@cluster0.gmnqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/MyDemoWeb'
    ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }    
    ).then(()=>console.warn("Mongo connected"))

