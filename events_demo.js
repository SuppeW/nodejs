const EventEmitter = require('events'); //glass

const Logger = require('./logger');
const logger = new Logger();

// Registrer en listener
logger.on('messageLogged', function(arg){ //arg refererer til argumententene bak emiten. se emitter.emit(.....)
  console.log('Listener Called', arg);
}); //on er et alias for addListener, de gjør nøyaktig det samme. (Det tar to argumenter)


logger.log('message');
