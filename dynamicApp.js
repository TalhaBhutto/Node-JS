const exp=require('express')
const app=exp()

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/htmlfiles/home.html")
})

app.listen(4000)