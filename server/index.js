const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.write(`<h1>Socket IO Start on Port : ${PORT}</h1>`);
    res.end();
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (ms) => {
        io.emit('message', ms);
    });
});

server.listen(PORT, () => {
    console.log('listening on *:3000');
});