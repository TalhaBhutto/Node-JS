var http=require('http');
var fs=require('fs')
http.createServer((req,res)=>{
fs.readFile('demo.html',(eror,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    return res.end()
})
}).listen(1001)