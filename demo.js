var http=require('http')
// const jsondata=[
//     {name:"Talha",class:"BSSE",seatNo:"B17158051"},
//     {name:"AR",class:"BSSE",seatNo:"B17158001"}
// ]
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application\json'})
// res.write(JSON.stringify(jsondata))
// res.end()
//}).listen(1001)
var uc=require('upper-case')
http.createServer((req,res)=>{
    //res.writeHead(200,{'Content-Type':'text/html'})
    res.write(uc.upperCase("Hello world"))
    res.end()
}).listen(4000)