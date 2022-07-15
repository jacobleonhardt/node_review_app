import { EventEmitter } from 'events'

// HTTP URL endpoint
const url = 'http://logger.io/log';

export class Logger extends EventEmitter {
  log(message) {
    console.log('------')
    this.emit('logger', { message })
  }
}
