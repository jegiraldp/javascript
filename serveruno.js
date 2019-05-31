const http = require('http');
const url = require('url');

function crearServer(){
http.createServer(function (req, res) {
console.log("Servidor ok listo");
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  const num =q.txtNum
  //
  res.write(num+"--");
  res.end();
}).listen(8081);

}//function

crearServer();
