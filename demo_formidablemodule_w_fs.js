const formidable = require('formidable');
const fs = require('fs');
const http = require('http');
port = 8080;

http.createServer(function(req, res){
  if(req.url =='/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files){
      var oldpath = files.filetoupload.path;
      var newpath = 'C/Users/AndersW/documents/nodejs/uploads' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function(err) {
        if(err) throw err;
        res.write('File uploaded and moved');
        console.log('File uploaded and moved');
        red.end();
      });
    });
  }else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="Fileupload" method=post" ectype="multipart/from-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(port);
console.log("Listening on port: "+port);
