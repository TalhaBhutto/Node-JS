var nm=require('node-mailer')
var transport =nm.createTransport({
    host:'smtp.gmail.com'
    ,port:'587'
    ,secure:false,
    requireTLS:true,
    auth:{
        user:'talhabhutto420@gmail.com',
        pass:'Bhutto@9'
    }
})