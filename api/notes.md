# path

# Buffer
- length
- toString()
- fill()
- equals()
- indexOf()

# events
- on() 
- emit() 
```js
const EventEmitter = require('events')

class CustomEvent extends EventEmitter { }

const ce = new CustomEvent()

ce.on('test', () => {
    console.log('this is a test!');

})

setInterval(() => {
    ce.emit('test')
}, 500)
```