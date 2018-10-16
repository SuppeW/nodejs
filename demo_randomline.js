const fs = require('fs');

function randomQuote(filename){
  fs.readFile(filename, function(err, data){
    if(err) throw err;
    var lines = data.toString().split('\n');
    var randomline = lines[Math.floor(Math.random()*lines.length)];
    return console.log(randomline);
  });
}

randomQuote("379quotes.txt")
