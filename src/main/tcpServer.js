const net = require('net') // nodejs version of imports
const server = new net.Server() // a new raw tcp server

const io = require('socket.io-client')
const socket = io('http://localhost:3000')

server.on('connection', (client) => {
  client.on('data', (data) => {
    // event when a client writes data to the server
    console.log(`Server received data: ${data}`) // log what the client sent
    socket.emit('chat', {
      message: data.toString()
    })
  })
})
server.listen(4000, '0.0.0.0') // listen on port 10000, localhost
