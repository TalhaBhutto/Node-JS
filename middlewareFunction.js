module.exports=(req,res,next)=>{
    console.warn('current route is',req.originalUrl)
    next();
}
