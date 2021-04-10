//included exporess
const exp=require('express');
const app=exp();

//included mongo DB 
const mongo= require('mongoose');

//user.js has the modal which would be used for our database
const User=require('./Models/user');

//connected mongo DB
mongo.connect('mongodb+srv://Talha:lYDxLcpsmAs2gC0Y@cluster0.gmnqm.mongodb.net/MyDemoWeb?retryWrites=true&w=majority'
    ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }    
    ).then(console.warn('connected'))


// including body parser to parse data from post
var bodyParser=require('body-parser');
var urlEncoded=bodyParser.urlencoded();

//included CSS for out project
app.use('/Assets',exp.static('Assets'));

//all 4 components are present in the view folder
app.set('view engine','ejs');

//created 4 routes
app.get("/",(req,res)=>{
    res.render('home');
    // user.find().then(data=>{
    //     console.warn(res.json(data));
    // })
});

app.get("/profile/:name",(req,res)=>{
    data={
        email:'test@test.com',
        address:'Khi',
        skills:['Node-js','React-Js','Python']
    };
    res.render('profile',{name:req.params.name,info:data});
});


app.get("/about",(rq,rs)=>{
    rs.render('About');
});

app.get("/login",(req,res)=>{
    res.render('Login');
});
app.post("/login",urlEncoded,(req,res)=>{
    res.render('home');
    console.warn(req.body)
});

app.listen(4000)