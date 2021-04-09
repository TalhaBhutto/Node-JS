const exp=require('express');
const app=exp()
app.get('/',(req,res)=>{
    res.send("Hello Express JS")
})
app.get('/about',(req,res)=>{
    res.send("Welcome to about page")
})
app.get('/user',(req,res)=>{
    res.send("Welcome to User page")
})

app.listen(4500)