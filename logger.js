const EventEmitter = require('events'); //glass

var url = 'http:/mylogger.io/log';

class Logger extends EventEmitter {
  log(message){
    //send a http
    console.log(message);

    //Raise an EventEmitter
    this.emit('messageLogged', {id: 1, url: 'http://'});
    console.log()
  }
}

module.exports = Logger;
