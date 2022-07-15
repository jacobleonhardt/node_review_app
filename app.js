import { Logger } from './logger.js'
import { EventEmitter } from 'events'

const customEvent = new EventEmitter()
const logger = new Logger()

// Regist a listener that will be called when event is raised
// .addListener and .on are pretty much the same thing; or achieve the same goal
customEvent.on('eventOccured', (e) => {
  console.log('Event: ', e)
})

logger.on('logger', (e) => {
  console.log('From Logger: ', e.message)
})

// Use .emit to raise an event -- signal something has happened
// .emit must be called AFTER .on/.addListener -- emit itterates over all registered listeners and calls them synchronusly
customEvent.emit('eventOccured', { id: 1, url: 'http://', })

logger.log('Hello World')
