const exp=require('express')
const app=exp()
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    //res.sendFile(__dirname+"/htmlfiles/home.html")
    res.render('profile')
})
app.get("/profile/:name",(req,res)=>{
    //res.sendFile(__dirname+"/htmlfiles/home.html")
    res.render('profile',{name:req.params.name})
})
app.listen(4000)