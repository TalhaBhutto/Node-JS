var http=require('http');
http.createServer((req,res)=>{
    res.write("Hello nodemon I have update you for the first time");
    res.end()
}).listen(4000)