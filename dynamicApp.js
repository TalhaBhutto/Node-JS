const exp=require('express')
const app=exp()
app.set('view engine','ejs')

app.use('/assets',exp.static('assets'))

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

app.listen(4000)