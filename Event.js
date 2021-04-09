events=require('events');
var EE=new events.EventEmitter();

EE.on("Speak",(name)=>{
    console.log(name, "is speaking")
})

EE.emit("Speak","Talha")