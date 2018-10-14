var fs = require('fs');

fs.rename('mynewfilename2.txt','mynewnewfilename2.txt', function(err){
  if(err)throw err;
  console.log('Renamed');
});
