const exp=require('express')
const app=exp()
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    //res.sendFile(__dirname+"/htmlfiles/home.html")
    res.render('profile')
})
app.get("/profile/:name",(req,res)=>{
    data={
        email:'test@test.com',
        address:'Khi',
        skills:['Node-js','React-Js','Python']
    }
    res.render('profile',{name:req.params.name,info:data})
})
app.listen(4000)