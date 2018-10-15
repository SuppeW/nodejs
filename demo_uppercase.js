const uc = require('upper-case');
const http = require('http');
var port = 8080;

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("Hello World!"));
  res.end();
}).listen(port);

console.log("listening to port: "+port);
