var nm=require('nodemailer')
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
var mailOp={
    from:'talhabhutto420@gmail.com',
    to:'talhahussain444@gmail.com'
    ,subject:'kesa dia?',
    text:'My first email from Node jS'
}
transport.sendMail(mailOp,(error,info)=>{
    if(error){
        console.warn(error);
    }
    else{
        console.warn('email sent seccessfully\n',info.response)
    }
})