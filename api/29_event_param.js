const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', function (a, b) {
    console.log(a, b, this);
    // 打印:
    //   a b MyEmitter {
    //     domain: null,
    //     _events: { event: [Function] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined }
});
// myEmitter.emit('event', 'a', 'b');

myEmitter.on('error', err => {
    console.log(err)
    console.log(this)
})
myEmitter.emit('error', new Error('oops!'))

console.log(this)