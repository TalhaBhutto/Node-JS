const exp=require('express');
const app=exp()
const router=exp.Router()
const checkUrl=require('./middlewareFunction')
//app.use(checkUrl)
app.get('/',(req,res)=>{
    //res.send("Hello Express JS")
    res.sendFile(__dirname+"/htmlFiles/home.html")
})
router.get('/about',checkUrl,(req,res)=>{
    //res.send("Welcome to about page")
    res.sendFile(__dirname+"/htmlFiles/about.html")
})
app.get('/user',(req,res)=>{
    //res.send("Welcome to User page")
    res.sendFile(__dirname+"/htmlFiles/user.html")
})

app.use('/',router)

app.listen(4500)