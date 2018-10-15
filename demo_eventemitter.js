const events = require('events');
const eventEmitter = new events.EventEmitter();

//create an event handler/listener
var myEventHandler = function(){
  console.log('I hear a scream!');
}

//assign and event for the myEventHandlerevnt
eventEmitter.on('scream', myEventHandler);

//run the event named scream
eventEmitter.emit('scream');
