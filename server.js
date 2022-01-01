const express = require("express");
const path = require("path")

var app = express();
var server = app.listen(3000 , function(){
    console.log("listening to port 3000");
});

const io = require("socket.io")(server , {
    allowEI03:true
});
app.use(express.static(path.join(__dirname,"")));

io.on("connection" , (socket)=>{
    console.log("Socket id ", socket.id);
});