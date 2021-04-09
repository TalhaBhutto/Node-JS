const exp=require('express')
const app=exp()

app.use('/Assets',exp.static('Assets'))

app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render('home')
})

app.get("/profile/:name",(req,res)=>{
    data={
        email:'test@test.com',
        address:'Khi',
        skills:['Node-js','React-Js','Python']
    }
    res.render('profile',{name:req.params.name,info:data})
})


app.get("/about",(rq,rs)=>{
    rs.render('About')
})

app.get("/login",(req,res)=>{
    res.render('login')
})

app.listen(4000)