var http=require('http');
var fs=require('fs')
http.createServer((req,res)=>{
fs.readFile('demp.html',(eror,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
})
}).listen(4000)