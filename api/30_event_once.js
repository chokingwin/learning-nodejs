const EventEmitter = require('events')

class CustomEvent extends EventEmitter { }

const ce = new CustomEvent()

ce.once('test', () => {
    console.log('this is a test!');

})

setInterval(() => {
    ce.emit('test')
}, 500)
