const http = require('http');
const url = require('url');
const cua = require('./cuadrado.js');

function crearServer(){
http.createServer(function (req, res) {
console.log("Server-Ok");
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  const num =q.txtNum;
  const cuadrado=cua.calcular(num);

  //
  res.write(cuadrado+"--");
  res.end();
}).listen(3000);

}//function

crearServer();
