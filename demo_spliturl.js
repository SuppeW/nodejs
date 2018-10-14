var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2018&month=October';
var q = url.parse(adr, true);

console.log(q.host); //returns localhost:8080
console.log(q.pathname); //returns '/default.html'
console.log(q.search); //returns year=2018&month=October

var qdata= q.query; //returns an object: year:... & month:...
console.log(qdata.month);
