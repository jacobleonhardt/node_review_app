import { log } from './logger.js'
import { EventEmitter } from 'events'

const customEvent = new EventEmitter()
const loggedMessage = log('Hello World')
// Regist a listener that will be called when event is raised
// .addListener and .on are pretty much the same thing; or achieve the same goal
customEvent.on('eventOccured', (e) => {
  console.log('Event: ', e)
})

customEvent.on('logger', (e) => {
  console.log('Log: ', e.message)
})

// Use .emit to raise an event -- signal something has happened
// .emit must be called AFTER .on/.addListener -- emit itterates over all registered listeners and calls them synchronusly
customEvent.emit('eventOccured', { id: 1, url: 'http://', })
customEvent.emit('logger', { message: 'Hello World' })
