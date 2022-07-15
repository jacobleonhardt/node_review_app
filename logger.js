// HTTP URL endpoint
const url = 'http://logger.io/log';

function log(message) {
  // Send HTTP req
  console.log(message)
}

module.exports.log = log
