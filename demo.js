var http=require('http')
http.createServer((req,res)=>{
res.write('hello from node-js')
}).listen(5000)