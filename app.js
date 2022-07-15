// import { Logger } from './logger.js'
// import { EventEmitter } from 'events'

// const customEvent = new EventEmitter()
// const logger = new Logger()

// // Regist a listener that will be called when event is raised
// // .addListener and .on are pretty much the same thing; or achieve the same goal
// customEvent.on('eventOccured', (e) => {
//   console.log('Event: ', e)
// })

// logger.on('logger', (e) => {
//   console.log('From Logger: ', e.message)
// })

// // Use .emit to raise an event -- signal something has happened
// // .emit must be called AFTER .on/.addListener -- emit itterates over all registered listeners and calls them synchronusly
// customEvent.emit('eventOccured', { id: 1, url: 'http://', })

// logger.log('Hello World')


// HTTP Test
import { createServer } from 'http'

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.write('HELLO WORLD!')
    res.end()
  }

  if (req.url === '/api/lessons') {
    res.write(JSON.stringify([1, 2, 3]))
    res.end()
  }
})

server.listen(3000)

console.log('Listening on port 3000...')
