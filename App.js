const exp=require('express');
const app=exp()
const router=exp.Router()
const checkUrl=require('./middlewareFunction')
//app.use(checkUrl)
app.get('/',(req,res)=>{
    res.send("Hello Express JS")
})
router.get('/about',checkUrl,(req,res)=>{
    res.send("Welcome to about page")
})
app.get('/user',(req,res)=>{
    res.send("Welcome to User page")
})

app.use('/',router)

app.listen(4500)