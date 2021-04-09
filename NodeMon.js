// npm install --save-dev nodemon

var http=require('http');
http.createServer((req,res)=>{
    res.write("Hello nodemon I have update you for the second time");
    res.end()
}).listen(4000)