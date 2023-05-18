const app = require('express')();
const http = require('http');
const {Server} = require('socket.io');
const cors = require("cors")

const port = 9000;
const server = http.createServer(app);

app.use(cors());

app.get('/', (_req, res) => {
  res.send("hello world")
});


const io = new Server(server, {
    cors: {
        origin: "http://localhost:4000"
    }
})

io.on('connection', (socket) => {
    socket.on('message', (data) => {
         socket.emit('messageResponse', data);
    });
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});