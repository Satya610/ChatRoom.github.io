const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname+"/public")));


var userlist = [];

io.on("connection", function(socket){
    socket.on("newuser", function(username){
        socket.broadcast.emit("update", username + " joined the conversation");
        userlist.push(username);
        console.log(userlist);
        io.emit("userlist", userlist);
    });
    socket.on("exituser", function(username){
        socket.broadcast.emit("update", username + " left the conversation");
        let index = userlist.indexOf(username);
        userlist.splice(index, 1);
        console.log(userlist);
        io.emit("userlist", userlist);
    });
    socket.on("disconnect", function(username){
        socket.broadcast.emit("update", username + " left the conversation");
        let index = userlist.indexOf(username);
        userlist.splice(index, 1);
        console.log(userlist);
        io.emit("userlist", userlist);
    })
    socket.on("chat", function(message){
        socket.broadcast.emit("chat", message);
    });
})


server.listen(8000); 