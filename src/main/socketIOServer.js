const app = require('express')()
const socketIOServer = require('http').createServer(app)
const io = require('socket.io')(socketIOServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    transports: ['websocket', 'polling'],
    credentials: true
  },
  allowEIO3: true,
  pingTimeout: 20000,
  pingInterval: 500
})

io.on('connection', (socket) => {
  console.log(`Connect from Client: ${socket}`)

  socket.on('hello', (data) => {
    console.log(`hello from Client: ${data.message}`)
  })

  socket.on('chat', (data) => {
    console.log(`message from Client: ${data.message}`)
    const rtnMessage = {
      message: data.message
    }
    socket.broadcast.emit('chat', rtnMessage)
  })
})

socketIOServer.listen(3000, () => {
  console.log('socket io socketIOServer listening on port 3000')
})
