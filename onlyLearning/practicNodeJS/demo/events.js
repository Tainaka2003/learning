const eventEmitter = require('events');

// const emitter = new eventEmitter();
//
// emitter.on('anything',data => {
//     console.log('ON: anything', data)
// })
//
// emitter.emit('anything', {a:1})
//
// let n = 0;
// function varChaser() {
//     n += 69;
// }
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:2})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:3})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:4})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:5})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:6})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:7})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:8})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:9})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:10})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:11})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:12})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:13})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:14})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:15})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:16})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:17})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:18})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:19})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:20})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:21})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:22})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:23})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:24})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:25})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:26})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:27})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:28})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:29})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:30})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:31})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:32})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:33})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:34})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:35})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:36})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:37})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:38})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:39})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:40})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:41})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:42})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:43})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:44})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:45})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:46})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:47})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:48})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:49})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:50})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:51})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:52})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:53})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:54})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:55})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {b:56})
// }, n);
//
// varChaser();
//
// setTimeout( () => {
//     emitter.emit('anything', {c:57})
// }, n);

class Dispatcher extends eventEmitter {
    subscribe(eventName, callBack) {
        console.log('[Subscribe...]');
        this.on(eventName, callBack);
    }

    dispatch (eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data);
    }
}

const dispatch = new Dispatcher()

// dis.dispatch('aa', {aa: 22}) - незадиспатчится

dispatch.subscribe('aa', data => {
    console.log('ON: aa', data)
})

dispatch.dispatch('aa', {aa: 22})