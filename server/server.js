const express = require('express')
const http = require('http');

const port = 8080;

const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origins: "*",
        methods: ["GET", "POST"]
    }
});

const nouns = ['Cars', 'Dogs,', 'a Forest', 'Pizza', 
'Trees', 'a Queen', 'Water', ' a Snowman', 
'Tomato', 'a Castle', 'a Planet', 'Frogs', 
'Computers', 'the Past', 'the Future', 
'Radios', 'a Story', 'Family']

const theme = nouns[Math.floor(nouns.length * Math.random())]
let connectionCount = 0;

io.on('connection', (socket) => {
    console.log('a user connected');
    connectionCount++;
    io.emit('count', connectionCount)
    io.emit('theme', theme)
    socket.on('story', (word) => {
        io.emit('story', word);
      });
    socket.on('disconnect', () => {
        console.log('user disconnected');
        socket.removeAllListeners();
        connectionCount--;
      });
});
  
server.listen(port, () => console.log(`Listening on port ${port}`));