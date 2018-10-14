var fs = require('fs');

fs.appendFile('mynewfile3.txt',' This is the changes I made.', function(err){
  if(err)throw err;
  console.log('Saved!');
});
